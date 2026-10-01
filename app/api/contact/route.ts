/**
 * Contact Form API Route (Next.js App Router)
 * Secures the contact form payload server-side using validation utilities
 * from @/lib/security. Implements defense-in-depth: client-side validation
 * is a UX convenience; this route re-validates every field independently.
 *
 * Response contract:
 *   200 { message: "Transmission received" }  - success
 *   400 { error: "Validation failed", field }  - invalid input
 *   400 { error: "Invalid request payload" }   - malformed JSON / runtime error
 *   500 { error: "Transmission failed" }       - email delivery failure (see below)
 */

import { NextRequest, NextResponse } from 'next/server';
import { sanitizeInput, isValidEmail, isValidName, isValidMessage } from '@/lib/security';

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request payload' },
      { status: 400 }
    );
  }

  // Server-side sanitization + validation (never trust the client).
  const name = sanitizeInput(typeof body.name === 'string' ? body.name : '');
  const email = sanitizeInput(typeof body.email === 'string' ? body.email : '');
  const message = sanitizeInput(typeof body.message === 'string' ? body.message : '');

  if (!isValidName(name)) {
    return NextResponse.json(
      { error: 'Validation failed', field: 'name' },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Validation failed', field: 'email' },
      { status: 400 }
    );
  }

  if (!isValidMessage(message)) {
    return NextResponse.json(
      { error: 'Validation failed', field: 'message' },
      { status: 400 }
    );
  }

  // ------------------------------------------------------------------
  // Email delivery (PLACEHOLDER)
  //
  // The sanitized payload is valid at this point. Wire it to a real
  // transactional email provider before going live. Two common options:
  //
  //   Option A — Resend (recommended, free tier):
  //     import { Resend } from 'resend';
  //     const resend = new Resend(process.env.RESEND_API_KEY);
  //     await resend.emails.send({
  //       from:    'SHAYAN.DEVSEC <noreply@smsu-portfolio.vercel.app>',
  //       to:      process.env.CONTACT_TO_EMAIL || 'shayanuddin4589@gmail.com',
  //       subject: `New secure transmission from ${name}`,
  //       text:    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  //     });
  //
  //   Option B — Nodemailer (SMTP):
  //     import nodemailer from 'nodemailer';
  //     const transporter = nodemailer.createTransport({
  //       host: process.env.SMTP_HOST,
  //       port: Number(process.env.SMTP_PORT) || 587,
  //       auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  //     });
  //     await transporter.sendMail({
  //       from:    process.env.SMTP_FROM || 'SHAYAN.DEVSEC',
  //       to:      process.env.CONTACT_TO_EMAIL || 'shayanuddin4589@gmail.com',
  //       subject: `New secure transmission from ${name}`,
  //       text:    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  //     });
  //
  // Required environment variables (set in Vercel / .env.local):
  //   RESEND_API_KEY            (Option A) OR
  //   SMTP_HOST/SMTP_USER/SMTP_PASS/SMTP_FROM (Option B)
  //   CONTACT_TO_EMAIL          (defaults to shayanuddin4589@gmail.com)
  // ------------------------------------------------------------------
  try {
    // Intentionally left as a no-op stub. Replace the body above with a
    // real provider call. Never log raw secrets.
    if (process.env.NODE_ENV === 'development') {
      console.log('[api/contact] Valid transmission received', {
        name,
        email,
        message,
      });
    }
  } catch (deliveryError) {
    return NextResponse.json(
      { error: 'Transmission failed' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: 'Transmission received' },
    { status: 200 }
  );
}