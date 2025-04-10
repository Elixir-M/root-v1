

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const services = searchParams.getAll('service');
//   const page = parseInt(searchParams.get('page') || '1');
//   const limit = 10;
//   const skip = (page - 1) * limit;


//   try {
//     let cards;

//     if (services.length > 0) {
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
//           services: true,
//         },
//         orderBy: {
//           createdAt: 'desc',
//         },
//         skip,
//         take: limit,
//       });
//     } else {
//       // If no services are selected, fetch all cards
//       cards = await prisma.card.findMany({
//         select: {
//           title: true,
//           description: true,
//           imageUrl: true,
//           pageName: true,
//           services : true,
//         },
//         orderBy: {
//           createdAt: 'desc',
//         },
//         skip,
//         take: limit,
//       }
      
//     );
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
  const page = parseInt(searchParams.get('page') || '1');
  const take = 10;
  const skip = (page - 1) * take;

  try {
    const filter = services.length > 0
      ? {
          OR: services.map(service => ({
            services: {
              has: service,
            },
          })),
        }
      : {};

    const [cards, total] = await Promise.all([
      prisma.card.findMany({
        where: filter,
        select: {
          title: true,
          description: true,
          imageUrl: true,
          pageName: true,
          services: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take,
      }),
      prisma.card.count({ where: filter }),
    ]);

    return NextResponse.json({ data: cards, total });
  } catch (error) {
    console.error('Error fetching filtered cards:', error);
    return NextResponse.json({ error: 'Failed to fetch cards' }, { status: 500 });
  }
}
