import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();
    const blogPage = await prisma.blogPage.create({
      data: {
        pageName: data.pageName,
        content: data.content,
        charts: data.charts,  // Store the array of chart objects directly
      },
    });
    return NextResponse.json(blogPage);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog page' }, { status: 500 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageName = searchParams.get('pageName');

  try {
    const blogPage = await prisma.blogPage.findUnique({
      where: { pageName },
    });
    return NextResponse.json(blogPage);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog page' }, { status: 500 });
  }
}