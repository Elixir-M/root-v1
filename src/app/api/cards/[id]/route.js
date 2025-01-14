// app/api/cards/[id]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
  try {
    await prisma.card.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ message: 'Card deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete card' }, { status: 500 });
  }
}