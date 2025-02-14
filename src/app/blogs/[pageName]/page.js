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