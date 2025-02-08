// // app/[pageName]/page.js

// import { PrismaClient } from '@prisma/client';
// import ReactMarkdown from 'react-markdown';

// // Create prisma client outside component to prevent multiple instances
// const prisma = new PrismaClient();

// export default async function BlogPage({ params }) {
//     const pageName = decodeURIComponent(params.pageName);
   
//     const [blogData, cardData] = await Promise.all([
//       prisma.blogPage.findUnique({
//         where: { pageName }
//       }),
//       prisma.card.findFirst({
//         where: { pageName }
//       })
//     ]);
   
//     if (!blogData || !cardData) return <div>Page not found</div>;
   
//     return (
//       <div className="min-h-screen bg-gray-100">
//         <div className="relative h-96">
//           <img
//             src={cardData.imageUrl}
//             alt={cardData.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <h1 className="text-4xl font-bold text-white">{cardData.title}</h1>
//           </div>
//         </div>
   
//         <div className="container mx-auto px-4 py-8">
//           <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
//             <div className="prose max-w-none text-black whitespace-pre-wrap">
//               <ReactMarkdown>{blogData.content}</ReactMarkdown>
//             </div>
//           </div>
   
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogData.charts.map((chart, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg p-8">
//                 <h2 className="text-2xl font-bold mb-4 text-black">{chart.title}</h2>
//                 <div className="flex items-center justify-center">
//                   <div className="relative w-32 h-32">
//                     <svg className="w-full h-full" viewBox="0 0 36 36">
//                       <path
//                         d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                         fill="none"
//                         stroke="#eee"
//                         strokeWidth="3"
//                       />
//                       <path
//                         d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                         fill="none"
//                         stroke="#2563eb"
//                         strokeWidth="3"
//                         strokeDasharray={`${chart.percentage}, 100`}
//                       />
//                     </svg>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <span className="text-2xl font-bold text-black">{chart.percentage}%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//    }





// app/[pageName]/page.js
// import { PrismaClient } from '@prisma/client';
// import BlogPageClient from './BlogPageClient';

// const prisma = new PrismaClient();

// export default async function BlogPage({ params }) {
//     const pageName = decodeURIComponent(params.pageName);
   
//     const [blogData, cardData] = await Promise.all([
//       prisma.blogPage.findUnique({
//         where: { pageName }
//       }),
//       prisma.card.findFirst({
//         where: { pageName }
//       })
//     ]);
   
//     if (!blogData || !cardData) return <div>Page not found</div>;
   
//     return <BlogPageClient blogData={blogData} cardData={cardData} />;
// }


// // app/[pageName]/page.js
// import { PrismaClient } from '@prisma/client';
// import BlogPageClient from './BlogPageClient';
// import { cache } from 'react';
// import { Navbar } from '@/components/Navbar';

// // Initialize PrismaClient
// let prisma;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// // Cache the data fetching
// const getBlogData = cache(async (pageName) => {
//   try {
//     // Add logging to debug the pageName
//     if (!pageName) {
//       throw new Error('Page name is required');
//     }

//     const [blogData, cardData] = await Promise.all([
//       prisma.blogPage.findUnique({
//         where: { pageName }
//       }),
//       prisma.card.findFirst({
//         where: { pageName }
//       })
//     ]);

//     if (!blogData || !cardData) {
//       return null; // Return null instead of throwing
//     }

//     return { blogData, cardData };
//   } catch (err) {
//     // Simply return null on error
//     return null;
//   }
// });

// export default async function BlogPage({ params }) {
//   const pageName = decodeURIComponent(params.pageName);
//   const data = await getBlogData(pageName);
  
//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
//           <p className="text-gray-600">The requested blog post could not be loaded</p>
//         </div>
//       </div>
//     );
//   }
  
//   return(
//     <div className="bg-black">
//       <Navbar className = "top-2"/>
//       <BlogPageClient blogData={data.blogData} cardData={data.cardData} />
//     </div>
    
//   ); 
// }

// // Use dynamic rendering with caching
// export const dynamic = 'force-dynamic';
// export const revalidate = 3600; // Revalidate every hour



// [pageName]/page.js
import { PrismaClient } from '@prisma/client';
import BlogPageClient from './BlogPageClient';
import { cache } from 'react';
import { Navbar } from '@/components/Navbar';

// Initialize PrismaClient (unchanged)
let prisma;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// Updated to include all fields explicitly
const getBlogData = cache(async (pageName) => {
  try {
    if (!pageName) {
      throw new Error('Page name is required');
    }

    const [blogData, cardData] = await Promise.all([
      prisma.blogPage.findUnique({
        where: { pageName },
        select: {          // NEW: Explicit field selection
          pageName: true,
          subheading: true,
          minuteRead: true,
          author: true,
          intro: true,
          solution: true,
          conclusion: true,
          charts: true,
          createdAt: true
        }
      }),
      prisma.card.findFirst({
        where: { pageName }
      })
    ]);

    if (!blogData || !cardData) {
      return null;
    }

    return { blogData, cardData };
  } catch (err) {
    return null;
  }
});

// Rest of the code remains the same
export default async function BlogPage({ params }) {
  const pageName = decodeURIComponent(params.pageName);
  const data = await getBlogData(pageName);
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <p className="text-gray-600">The requested blog post could not be loaded</p>
        </div>
      </div>
    );
  }
  
  return(
    <div className="bg-black">
      <Navbar className="top-2"/>
      <BlogPageClient blogData={data.blogData} cardData={data.cardData} />
    </div>
  ); 
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600;