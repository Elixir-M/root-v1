// app/api/cards/[id]/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// export async function DELETE(req, { params }) {
//   try {
//     await prisma.card.delete({
//       where: {
//         id: params.id,
//       },
//     });
//     return NextResponse.json({ message: 'Card deleted successfully' });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to delete card' }, { status: 500 });
//   }
// }

export async function DELETE(req, { params }){
  try {
    const card = await prisma.card.findUnique({
      where: {
        id: params.id,
      },
      select: {
        pageName: true
      }
    });

    if (!card){
      return NextResponse.json({error: 'Card not found'}, {status: 404});
    }

    await prisma.$transaction([
      prisma.card.delete({
        where: {
          id: params.id,
        },
      }),
      prisma.blogPage.delete({
        where: {
          pageName: card.pageName,
        },
      }),
    ]);

    return NextResponse.json({message: 'Card and BlogPage deleted successfully'});    
  } catch (error){
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Failes to delete records'}, { status: 500});
  }
}