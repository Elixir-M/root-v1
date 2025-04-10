// // app/api/cards/[id]/route.js
// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function DELETE(req, { params }){
//   try {
//     const card = await prisma.card.findUnique({
//       where: {
//         id: params.id,
//       },
//       select: {
//         pageName: true
//       }
//     });

//     if (!card){
//       return NextResponse.json({error: 'Card not found'}, {status: 404});
//     }

//     await prisma.$transaction([
//       prisma.card.delete({
//         where: {
//           id: params.id,
//         },
//       }),
//       prisma.blogPage.delete({
//         where: {
//           pageName: card.pageName,
//         },
//       }),
//     ]);

//     return NextResponse.json({message: 'Card and BlogPage deleted successfully'});    
//   } catch (error){
//     console.error('Delete error:', error);
//     return NextResponse.json({ error: 'Failed to delete records'}, { status: 500});
//   }
// }

// app/api/cards/[id]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export async function DELETE(req, { params }) {
  try {
    // First find the card
    const card = await prisma.card.findUnique({
      where: {
        id: params.id,
      },
      select: {
        pageName: true
      }
    });

    if (!card) {
      return NextResponse.json({ error: 'Card not found' }, { status: 404 });
    }

    // Delete the card first
    await prisma.card.delete({
      where: {
        id: params.id,
      },
    });

    // Check if BlogPage exists before trying to delete it
    const blogPage = await prisma.blogPage.findUnique({
      where: {
        pageName: card.pageName,
      },
    });

    // Only try to delete BlogPage if it exists
    if (blogPage) {
      await prisma.blogPage.delete({
        where: {
          pageName: card.pageName,
        },
      });
    }

    return NextResponse.json({ message: 'Card deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Failed to delete records' 
    }, { status: 500 });
  }
}