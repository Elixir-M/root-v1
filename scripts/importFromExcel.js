// const xlsx = require('xlsx');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // 📂 Load Excel file (update path if needed)
// const workbook = xlsx.readFile('scripts/data/blogdata.xlsx');
// const worksheet = workbook.Sheets['Blog (Final)']; // 👈 Your target sheet
// const data = xlsx.utils.sheet_to_json(worksheet); // 📊 Convert to JSON array

// // 🔁 Date parser for MM/DD/YYYY to JS Date
// const parseDate = (dateString) => {
//   const [month, day, year] = dateString.split('/');
//   return new Date(`${year}-${month}-${day}`);
// };

// async function importData() {
//   const entries = data
//     .filter(row => row['Heading'] && row['Short Description']) // ✅ Required fields
//     .map(row => {
//       let createdAt;

//       try {
//         createdAt = parseDate(row['Date Posted']);
//         if (isNaN(createdAt)) createdAt = new Date(); // fallback
//       } catch {
//         createdAt = new Date(); // fallback
//       }

//       return {
//         title: row['Heading'],
//         description: row['Short Description'],
//         imageUrl: 'placeholder.jpg',
//         pageName: row['URL Slug'] || 'default',
//         createdAt,
//       };
//     });

//   const batchSize = 100;
//   for (let i = 0; i < entries.length; i += batchSize) {
//     const batch = entries.slice(i, i + batchSize);

//     await prisma.card.createMany({
//       data: batch,
//       skipDuplicates: true,
//     });

//     console.log(`✅ Inserted batch ${i / batchSize + 1}`);
//   }

//   console.log("🎉 All data imported successfully!");
//   await prisma.$disconnect();
// }

// // 🚀 Run it!
// importData().catch((e) => {
//   console.error("❌ Import error:", e);
//   prisma.$disconnect();
// });



// const xlsx = require('xlsx');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // 📂 Load Excel
// const workbook = xlsx.readFile('scripts/data/blogdata1.xlsx');
// const worksheet = workbook.Sheets['Blog (Final)'];
// const data = xlsx.utils.sheet_to_json(worksheet);

// // ✅ Safe date parser
// const parseDate = (rawValue) => {
//   if (!rawValue) return new Date();

//   // Handle Excel numeric dates
//   if (typeof rawValue === 'number') {
//     const excelEpoch = new Date(Date.UTC(1899, 11, 30));
//     return new Date(excelEpoch.getTime() + rawValue * 86400000);
//   }

//   // Already a valid Date object
//   if (rawValue instanceof Date && !isNaN(rawValue)) return rawValue;

//   // Handle MM/DD/YYYY strings
//   if (typeof rawValue === 'string') {
//     const parts = rawValue.split('/');
//     if (parts.length === 3) {
//       const [month, day, year] = parts;
//       const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
//       if (!isNaN(date)) return date;
//     }
//   }

//   // Fallback to now
//   return new Date();
// };

// async function importData() {
//   const entries = data
//     .filter(row => row['Heading'] && row['Short Description'])
//     .map(row => {
//       const createdAt = parseDate(row['Date Posted']);

//       return {
//         title: row['Heading'],
//         description: row['Short Description'],
//         imageUrl: 'placeholder.jpg',
//         pageName: row['URL Slug'] || 'default',
//         services: row['Service 1'] || 'default',
//         createdAt,
//       };
//     });

//   try {
//     await prisma.card.createMany({
//       data: entries,
//       skipDuplicates: true,
//     });
//     console.log(`✅ Successfully inserted ${entries.length} entries!`);
//   } catch (error) {
//     console.error('❌ Import error:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// importData();


const xlsx = require('xlsx');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Load workbook and sheets
const workbook = xlsx.readFile('scripts/data/blogpage.xlsx');
const blogSheet = workbook.Sheets['Blog (Final)'];
const statsSheet = workbook.Sheets['Stats'];

const blogData = xlsx.utils.sheet_to_json(blogSheet);
const statsData = xlsx.utils.sheet_to_json(statsSheet);

// 🔐 Safe date parser
const parseDate = (rawValue) => {
  if (!rawValue) return new Date();

  if (typeof rawValue === 'number') {
    const excelEpoch = new Date(Date.UTC(1899, 11, 30));
    return new Date(excelEpoch.getTime() + rawValue * 86400000);
  }

  if (rawValue instanceof Date && !isNaN(rawValue)) return rawValue;

  if (typeof rawValue === 'string') {
    const parts = rawValue.split('/');
    if (parts.length === 3) {
      const [month, day, year] = parts;
      const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
      if (!isNaN(date)) return date;
    }
  }

  return new Date();
};

// 📊 Parse chart data from stats sheet
const getChartsForSlug = (slug) => {
  const row = statsData.find(statRow => statRow['URL Slug'] === slug);
  if (!row) return [];

  const charts = [];

  for (let i = 1; i <= 3; i++) {
    const title = row[`Stat ${i} Title`];
    const percentage = row[`Stat ${i} %`];

    if (title && percentage != null && percentage !== '') {
      charts.push({
        title: title.toString().trim(),
        percentage: Number(percentage),
      });
    }
  }

  return charts;
};

// 🚀 Import function
async function importBlogPages() {
  const entries = blogData.map(row => {
    const slug = row['URL Slug'];
    const charts = getChartsForSlug(slug);

    return {
      pageName: slug,
      subheading: row['Sub Heading'] || '',
      minuteRead: parseInt(row['Min Read'], 10) || 0,
      author: row['Author'] || 'Unknown',
      intro: row['Introduction'] || '',
      solution: row['Solution'] || '',
      conclusion: row['Conclusion'] || '',
      createdAt: parseDate(row['Date Posted']),
      charts,
    };
  });

  try {
    await prisma.blogPage.createMany({
      data: entries,
      skipDuplicates: true,
    });
    console.log(`✅ Successfully inserted ${entries.length} blog pages!`);
  } catch (error) {
    console.error('❌ Import error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importBlogPages();

