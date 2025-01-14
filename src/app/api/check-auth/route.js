// app/api/check-auth/route.js
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token'); // Make sure this matches your login cookie name

    console.log('Token from cookie:', token); // For debugging

    if (!token) {
      return NextResponse.json({ error: 'No token found' }, { status: 401 });
    }

    try {
      const verified = verify(token.value, process.env.JWT_SECRET);
      console.log('Verified token:', verified); // For debugging
      return NextResponse.json({ authenticated: true });
    } catch (verifyError) {
      console.log('Token verification failed:', verifyError); // For debugging
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  } catch (error) {
    console.log('Check auth error:', error); // For debugging
    return NextResponse.json({ error: 'Auth check failed' }, { status: 401 });
  }
}