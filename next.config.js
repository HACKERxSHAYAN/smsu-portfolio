/** @type {import('next').NextConfig} */

// Rate limiting - simple in-memory implementation
// In production, use Redis or similar
const rateLimitMap = new Map();
const RATE_LIMIT = 100; // requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

const nextConfig = {
  // Enable strict React mode
  reactStrictMode: true,
  
  // Turbopack configuration
  turbopack: {},
  
  // Experimental features
  experimental: {
    webpackBuildWorker: true,
  },
  
  // Secure image handling
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Headers configuration (replaces middleware.ts)
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Server',
            value: 'Security-Hardened',
          },
          {
            key: 'X-Powered-By',
            value: 'Next.js',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
