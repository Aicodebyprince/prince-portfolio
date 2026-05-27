import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize Resend server-side — API key never exposed to client
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple rate limiting (in-memory, per-process — good enough for Vercel serverless)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;       // max submissions per window
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count += 1;
  return false;
}

// Sanitize string — strip HTML tags to prevent injection
function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait before trying again.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check — bots fill hidden fields
    if (body._hp && String(body._hp).trim() !== '') {
      // Silently accept without sending (confuses bots)
      return NextResponse.json({ success: true });
    }

    const name = sanitize(String(body.name || ''));
    const email = sanitize(String(body.email || ''));
    const projectType = sanitize(String(body.projectType || ''));
    const message = sanitize(String(body.message || ''));

    // Basic server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'A valid name is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!projectType) {
      return NextResponse.json({ error: 'Project type is required.' }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ error: 'A message of at least 10 characters is required.' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'princesher321@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    const projectTypeLabel: Record<string, string> = {
      'backend-system': 'Backend / API System',
      'workflow-automation': 'Workflow Automation',
      'dashboard': 'Operational Dashboard',
      'ai-tool': 'AI Tool',
      'website': 'Business Website',
      'other': 'Other',
    };

    const projectLabel = projectTypeLabel[projectType] || projectType;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact from ${name} — ${projectLabel}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Portfolio Inquiry</title>
        </head>
        <body style="margin:0;padding:0;background:#05070b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <div style="max-width:580px;margin:32px auto;background:#0c131a;border:1px solid rgba(57,215,197,0.22);border-radius:16px;overflow:hidden;">
            <!-- Header bar -->
            <div style="height:3px;background:linear-gradient(90deg,#d8a24d,#39d7c5);"></div>
            <div style="padding:32px 36px 28px;">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
                <div style="width:10px;height:10px;border-radius:50%;background:#39d7c5;box-shadow:0 0 8px rgba(57,215,197,0.6);flex-shrink:0;"></div>
                <span style="color:#a8b1bd;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">New Portfolio Inquiry</span>
              </div>

              <h1 style="margin:0 0 8px;color:#f7fafc;font-size:22px;font-weight:800;line-height:1.2;">Someone reached out via your portfolio</h1>
              <p style="margin:0 0 28px;color:#a8b1bd;font-size:14px;line-height:1.6;">Here are the details of the inquiry.</p>

              <!-- Details -->
              <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:8px 8px 0 0;">
                    <span style="display:block;color:#a8b1bd;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">From</span>
                    <span style="color:#f7fafc;font-size:15px;font-weight:600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-top:none;">
                    <span style="display:block;color:#a8b1bd;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Email</span>
                    <a href="mailto:${email}" style="color:#39d7c5;font-size:14px;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-top:none;">
                    <span style="display:block;color:#a8b1bd;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Project Type</span>
                    <span style="color:#d8a24d;font-size:14px;font-weight:600;">${projectLabel}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-top:none;border-radius:0 0 8px 8px;">
                    <span style="display:block;color:#a8b1bd;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;">Message</span>
                    <p style="margin:0;color:#ebf1f7;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#d8a24d,#f1c06f);color:#070707;font-size:14px;font-weight:700;border-radius:10px;text-decoration:none;">
                Reply to ${name}
              </a>
            </div>
            <div style="padding:18px 36px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;color:rgba(168,177,189,0.6);font-size:11px;">This email was sent from the contact form on your portfolio — princesherathiya.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
