// app/api/cards/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cards = await prisma.card.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(cards);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
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
        pageName: data.pageName,
      },
    });
    return NextResponse.json(card);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create card' }, { status: 500 });
  }
}