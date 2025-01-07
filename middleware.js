import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function middleware(request) {
  // Only protect admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow access to login page
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  const token = request.cookies.get('admin_token');

  // Redirect to login if no token
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    // Verify token
    verify(token.value, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    // Redirect to login if token is invalid
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: '/admin/:path*'
};