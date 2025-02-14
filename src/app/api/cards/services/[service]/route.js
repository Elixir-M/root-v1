// app/api/cards/[service]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const cards = await prisma.card.findMany({
      where: {
        services: params.service  // using services field
      },
      select: {
        title: true,
        description: true,
        imageUrl: true,
        pageName: true
      }
    });
    return NextResponse.json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
  }
}