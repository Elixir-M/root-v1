// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(req) {
//   try {
//     const data = await req.json();
//     const blogPage = await prisma.blogPage.create({
//       data: {
//         pageName: data.pageName,
//         content: data.content,
//         charts: data.charts,  // Store the array of chart objects directly
//       },
//     });
//     return NextResponse.json(blogPage);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to create blog page' }, { status: 500 });
//   }
// }

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const pageName = searchParams.get('pageName');

//   try {
//     const blogPage = await prisma.blogPage.findUnique({
//       where: { pageName },
//     });
//     return NextResponse.json(blogPage);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch blog page' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();
    console.log('Received data in API:', data);
    console.log('Charts data:', data.charts);

    // Validate charts data
    if (!Array.isArray(data.charts)) {
      throw new Error('Charts must be an array');
    }
    
    // Validate required fields
    const requiredFields = ['pageName', 'subheading', 'minuteRead', 'author', 'intro', 'solution', 'conclusion', 'charts'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Ensure each chart has required fields
    const validatedCharts = data.charts.map(chart => ({
      title: chart.title || '',
      percentage: parseFloat(chart.percentage) || 0
    }));

    console.log('Validated charts:', validatedCharts);

    // Create blog page with all fields
    const blogPage = await prisma.blogPage.create({
      data: {
        pageName: data.pageName,
        subheading: data.subheading,
        minuteRead: parseInt(data.minuteRead),
        author: data.author,
        intro: data.intro,
        solution: data.solution,
        conclusion: data.conclusion,
        charts: validatedCharts
      },
    });

    return NextResponse.json(blogPage);
  } catch (error) {
    console.error('Error creating blog page:', error);
    return NextResponse.json(
      { error: 'Failed to create blog page', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageName = searchParams.get('pageName');

  if (!pageName) {
    return NextResponse.json(
      { error: 'Page name is required' },
      { status: 400 }
    );
  }

  try {
    const blogPage = await prisma.blogPage.findUnique({
      where: { pageName },
    });

    if (!blogPage) {
      return NextResponse.json(
        { error: 'Blog page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(blogPage);
  } catch (error) {
    console.error('Error fetching blog page:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog page', details: error.message },
      { status: 500 }
    );
  }
}