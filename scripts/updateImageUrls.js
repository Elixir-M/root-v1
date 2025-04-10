const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const CLOUDINARY_JSON_PATH = path.resolve(__dirname, '../cloudinary_urls1.json');
const EXCEL_PATH = path.resolve(__dirname, './data/blogImages.xlsx');
const EXCEL_SHEET_NAME = 'Blog (Final)';
async function main() {
    const cloudinaryData = JSON.parse(fs.readFileSync(CLOUDINARY_JSON_PATH, 'utf8'));

    const urlMap = {};
    cloudinaryData.forEach(({ fileName, url }) => {
      urlMap[fileName] = url;
    });
    const workbook = xlsx.readFile(EXCEL_PATH);
    const sheet = workbook.Sheets[EXCEL_SHEET_NAME];
    const rows = xlsx.utils.sheet_to_json(sheet);
    const updates = [];

    for (const row of rows) {
      const id = String(row.ID).trim();
      const slug = row['URL Slug']?.trim();
  
      if (!id || !slug) continue;
  
      const imageUrl = urlMap[id];
      if (!imageUrl) {
        console.warn(`⚠️ No Cloudinary URL found for ID ${id}`);
        continue;
      }
  
      updates.push({ slug, imageUrl });
    }
    for (const { slug, imageUrl } of updates) {
        try {
          const updated = await prisma.card.updateMany({
            where: { pageName: slug },
            data: { imageUrl },
          });
          if (updated.count > 0) {
            console.log(`✅ Updated ${slug}`);
          } else {
            console.warn(`⚠️ No match found in DB for pageName: ${slug}`);
          }
        } catch (err) {
          console.error(`❌ Error updating ${slug}:`, err.message);
        }
      }
    
      await prisma.$disconnect();
      console.log('🎉 Done updating image URLs!');
    }
    main();
          
