'use client';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <button
          onClick={() => signIn('google', { callbackUrl: '/admin/dashboard' })}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}