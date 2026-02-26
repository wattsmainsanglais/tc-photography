import { NextRequest, NextResponse } from 'next/server';

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const attempts = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  const now = Date.now();
  const record = attempts.get(ip);

  if (record) {
    if (now < record.resetAt) {
      if (record.count >= MAX_ATTEMPTS) {
        return NextResponse.json(
          { error: 'Too many attempts. Try again in 15 minutes.' },
          { status: 429 }
        );
      }
    } else {
      attempts.delete(ip);
    }
  }

  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    attempts.delete(ip);
    return NextResponse.json({ ok: true });
  }

  const current = attempts.get(ip);
  if (current && now < current.resetAt) {
    current.count += 1;
  } else {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
