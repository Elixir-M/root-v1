


// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const services = searchParams.getAll('service');

//   try {
//     let cards;

//     if (services.length > 0 && !services.includes('all')) {
//       cards = await prisma.card.findMany({
//         where: {
//           OR: services.map(service => ({
//             services: {
//               has: service,
//             },
//           })),
//         },
//         select: {
//           title: true,
//           description: true,
//           imageUrl: true,
//           pageName: true,
//         },
//       });
//     } else {
//       // If 'all' is selected or no services are selected, fetch all cards
//       cards = await prisma.card.findMany({
//         select: {
//           title: true,
//           description: true,
//           imageUrl: true,
//           pageName: true,
//         },
//       });
//     }

//     return NextResponse.json({ data: cards });
//   } catch (error) {
//     console.error('Error fetching filtered cards:', error);
//     return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const services = searchParams.getAll('service');

  try {
    let cards;

    if (services.length > 0) {
      cards = await prisma.card.findMany({
        where: {
          OR: services.map(service => ({
            services: {
              has: service,
            },
          })),
        },
        select: {
          title: true,
          description: true,
          imageUrl: true,
          pageName: true,
        },
      });
    } else {
      // If no services are selected, fetch all cards
      cards = await prisma.card.findMany({
        select: {
          title: true,
          description: true,
          imageUrl: true,
          pageName: true,
        },
      });
    }

    return NextResponse.json({ data: cards });
  } catch (error) {
    console.error('Error fetching filtered cards:', error);
    return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
  }
}