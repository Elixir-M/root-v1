// app/api/cards/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     const cards = await prisma.card.findMany({
//       orderBy: {
//         createdAt: 'desc',
//       },
//     });
//     return NextResponse.json(cards);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
//   }
// }

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export async function GET() {
  try {
    // 1. Test database connection
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('Database connection successful');

    // 2. Check if tables exist
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema='public'
    `;
    console.log('Available tables:', tables);

    // 3. Try to count records
    const cardCount = await prisma.card.count();
    console.log('Number of cards:', cardCount);

    // 4. Fetch cards with specific fields
    const cards = await prisma.card.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        pageName: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log('Successfully fetched cards:', cards.length);
    return NextResponse.json(cards);

  } catch (error) {
    console.error('Detailed error:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });

    // Return more detailed error to client
    return NextResponse.json({
      error: 'Failed to fetch cards',
      details: error.message,
      code: error.code
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const card = await prisma.card.create({
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        pageName: data.pageName || "test",
      },
    });
    return NextResponse.json(card);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create card' }, { status: 500 });
  }
}