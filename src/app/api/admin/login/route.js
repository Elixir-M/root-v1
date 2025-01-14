import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    const body = await request.json();
    
    if (body.username === ADMIN_USERNAME && body.password === ADMIN_PASSWORD) {
      // Create JWT token
      const token = sign({ username: body.username }, JWT_SECRET, { expiresIn: '1h' });
      
      // Set HTTP-only cookie
      const cookieStore = cookies();
      cookieStore.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 3600 // 1 hour
      });

      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error); // For debugging
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}