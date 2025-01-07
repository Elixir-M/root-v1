// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// const prisma = new PrismaClient();

// export async function GET(request) {
//   try {
//     // 1. Check authentication
//     const session = await getServerSession(authOptions);
    
//     // 2. Verify admin access
//     if (!session?.user?.email || 
//         !process.env.ADMIN_EMAILS?.includes(session.user.email)) {
//       return NextResponse.json(
//         { error: 'Unauthorized' }, 
//         { status: 401 }
//       );
//     }

//     // 3. Fetch submissions
//     const submissions = await prisma.contactSubmission.findMany({
//       orderBy: {
//         submittedAt: 'desc',
//       },
//     });

//     // 4. Return submissions
//     return NextResponse.json(submissions);
    
//   } catch (error) {
//     console.error('Error fetching submissions:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch submissions' },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request) {
  try {
    // Verify authentication
    const cookieStore = cookies();
    const token = cookieStore.get('admin_token');

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      verify(token.value, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Fetch submissions from database
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        submittedAt: 'desc'
      }
    });

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}