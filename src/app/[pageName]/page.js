// app/[pageName]/page.js

import { PrismaClient } from '@prisma/client';
import ReactMarkdown from 'react-markdown';

// Create prisma client outside component to prevent multiple instances
const prisma = new PrismaClient();

export default async function BlogPage({ params }) {
    const pageName = decodeURIComponent(params.pageName);
   
    const [blogData, cardData] = await Promise.all([
      prisma.blogPage.findUnique({
        where: { pageName }
      }),
      prisma.card.findFirst({
        where: { pageName }
      })
    ]);
   
    if (!blogData || !cardData) return <div>Page not found</div>;
   
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="relative h-96">
          <img
            src={cardData.imageUrl}
            alt={cardData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{cardData.title}</h1>
          </div>
        </div>
   
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="prose max-w-none text-black whitespace-pre-wrap">
              <ReactMarkdown>{blogData.content}</ReactMarkdown>
            </div>
          </div>
   
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.charts.map((chart, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-black">{chart.title}</h2>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="3"
                        strokeDasharray={`${chart.percentage}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">{chart.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
   }