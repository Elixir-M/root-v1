const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deduplicateServices() {
  try {
    const allCards = await prisma.card.findMany();
    let updated = 0;

    for (const card of allCards) {
      const originalServices = card.services;
      const uniqueServices = [...new Set(originalServices)];

      if (originalServices.length !== uniqueServices.length) {
        await prisma.card.update({
          where: { id: card.id },
          data: { services: uniqueServices },
        });

        console.log(`Deduplicated services for: ${card.pageName}`);
        updated++;
      }
    }

    console.log(`Deduplication complete. Records updated: ${updated}`);
  } catch (err) {
    console.error('Error during deduplication:', err);
  } finally {
    await prisma.$disconnect();
  }
}

deduplicateServices();
