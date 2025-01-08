// import NextAuth from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // You can add more providers here
//   ],
//   callbacks: {
//     async session({ session, user }) {
//       session.user.id = user.id;
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/auth/signin',
//     // error: '/auth/error',
//     // signOut: '/auth/signout'
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };