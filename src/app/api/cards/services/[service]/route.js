// app/api/cards/[service]/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request, { params }) {
 
  try {
    const cards = await prisma.card.findMany({
      where: {
        services: {
          has: params.service
        }
      },
      select: {
        title: true,
        description: true,
        imageUrl: true,
        pageName: true
      },
      
    });
    return NextResponse.json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
  }
}