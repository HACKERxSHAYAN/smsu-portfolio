/**
 * Root Proxy — Security Shield (Next.js 16)
 *
 * The `middleware.ts` filename is deprecated in Next.js 16 in favor of
 * `proxy.ts`. This file implements the same edge-layer protections:
 *  - Strict security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)
 *  - IP-based rate limiting for API routes (in-memory, per-process)
 *
 * The handler is exported as `proxy()` to match the Next.js 16 convention;
 * the export name (not just the file name) must be `proxy` or `default`.
 */

import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// In-memory rate limit store (per-process; resets on server restart).
// For multi-instance / serverless deployments, replace with Redis/Upstash.
// ---------------------------------------------------------------------------
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();
const RATE_LIMIT_MAX = 5; // requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function getRateLimitIdentifier(req: NextRequest): string {
  // Prefer X-Forwarded-For (set by Vercel/proxies), fall back to
  // X-Real-Ip, then give up gracefully. Never access req.ip — it does not
  // exist on the NextRequest type and would crash the build.
  const forwarded = req.headers.get('x-forwarded-for');
  const ip =
    forwarded?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  // Only the route path differentiates API vs non-API traffic.
  return `ratelimit:${ip}:${req.nextUrl.pathname}`;
}

function checkRateLimit(identifier: string): { allowed: boolean; remainingTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remainingTime: 0 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remainingTime: record.resetTime - now };
  }

  record.count++;
  return { allowed: true, remainingTime: 0 };
}

// ---------------------------------------------------------------------------
// Security headers applied by the proxy (supplements next.config.js headers()).
// These guarantee the headers are present even for dynamically-rendered routes.
// ---------------------------------------------------------------------------
function applySecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=()'
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://api.github.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
  );
  return response;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ---- Rate limiting: API routes only ----
  if (pathname.startsWith('/api/')) {
    const identifier = getRateLimitIdentifier(req);
    const { allowed, remainingTime } = checkRateLimit(identifier);

    if (!allowed) {
      const response = NextResponse.json(
        { error: 'Too Many Requests', retryAfter: Math.ceil(remainingTime / 1000) },
        { status: 429 }
      );
      response.headers.set('Retry-After', String(Math.ceil(remainingTime / 1000)));
      response.headers.set('X-RateLimit-Limit', String(RATE_LIMIT_MAX));
      response.headers.set('X-RateLimit-Remaining', '0');
      return applySecurityHeaders(response);
    }
  }

  // ---- Continue to the matched route, applying security headers ----
  const response = NextResponse.next();
  return applySecurityHeaders(response);
}

// Only run the proxy for the application routes we care about.
// Excludes static assets, images, and internal Next.js paths.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|map|woff|woff2|ttf|eot|ico)$).*)',
  ],
};