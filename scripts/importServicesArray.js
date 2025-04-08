const xlsx = require('xlsx');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateServicesArray() {
  const workbook = xlsx.readFile('scripts/data/services.xlsx'); // <- your actual path
  const sheet = workbook.Sheets['Blog (Final)'];
  const data = xlsx.utils.sheet_to_json(sheet);

  let updated = 0, skipped = 0;

  for (const row of data) {
    const pageName = row['URL Slug'];
    const service1 = row['Mapped Service 1']?.trim();
    const service2 = row['Mapped Service 2']?.trim();

    if (!pageName) {
      console.warn('⚠️ Missing URL Slug. Skipping row.');
      skipped++;
      continue;
    }

    const servicesArray = [];
    if (service1) servicesArray.push(service1);
    if (service2) servicesArray.push(service2);

    try {
      const result = await prisma.card.updateMany({
        where: { pageName },
        data: { services: servicesArray },
      });

      if (result.count > 0) {
        console.log(`✅ Updated ${pageName} with services: ${JSON.stringify(servicesArray)}`);
        updated++;
      } else {
        console.warn(`❌ No matching entry found for: ${pageName}`);
        skipped++;
      }
    } catch (err) {
      console.error(`❌ Error updating ${pageName}:`, err);
      skipped++;
    }
  }

  console.log(`\n🎉 Done. Updated: ${updated}, Skipped: ${skipped}`);
  await prisma.$disconnect();
}

updateServicesArray().catch((err) => {
  console.error('❌ Script error:', err);
  prisma.$disconnect();
});
