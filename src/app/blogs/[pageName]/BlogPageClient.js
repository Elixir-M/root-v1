'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const AnimatedCircleChart = ({ percentage, title, color = '#2563EB' }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const elementRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1500;
          const steps = 60;
          const increment = percentage / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= percentage) {
              setAnimatedPercentage(percentage);
              clearInterval(timer);
            } else {
              setAnimatedPercentage(current);
            }
          }, duration / steps);

          observer.current.disconnect();
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.current.observe(elementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [percentage]);

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <div className="relative w-64 h-64">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          {/* Background circle - thin white */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#333333"
            strokeWidth="1"
          />
          {/* Progress circle - thicker blue */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${(animatedPercentage * 100) / 100} 100`}
            // strokeLinecap="round"
            style={{
              transitionProperty: 'stroke-dasharray',
              transitionDuration: '300ms',
              transitionTimingFunction: 'ease-in-out'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white">{Math.round(animatedPercentage)}%</span>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-8 text-center text-white italic"><ReactMarkdown>{title || ''}</ReactMarkdown></h2>
    </div>
  );
};

export default function BlogPageClient({ blogData, cardData }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title and Date */}
          <h1 className="text-5xl font-bold text-white mb-4 mt-11">
            {cardData.title}
          </h1>
          {/* <div className="mb-8">
            <span className="text-gray-400">
              {new Date(blogData.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div> */}
          {/* Subheading - NEW */}
          <div className="text-xl text-gray-400 mb-6">
            <ReactMarkdown>{blogData.subheading}</ReactMarkdown>
          </div>

          {/* Author, Read Time, and Date - MODIFIED */}
          <div className="mb-8 flex items-center text-gray-500">
            <span>{blogData.author}</span>
            <span className="mx-2">•</span>
            <span>{blogData.minuteRead} min read</span>
            <span className="mx-2">•</span>
            <span>{new Date(blogData.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src={cardData.imageUrl}
              alt={cardData.title}
              className="w-full h-[60vh] object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          {/* <div className="prose prose-invert prose-lg max-w-none text-white">
            <ReactMarkdown>{blogData.content}</ReactMarkdown>
          </div> */}

          {/* Introduction - NEW */}
          <div className="prose prose-invert prose-lg max-w-none text-white mb-12">
          {/* <h2 className="text-3xl font-bold mb-6">Introduction</h2> */}
            <ReactMarkdown>{blogData.intro}</ReactMarkdown>
          </div>

          {/* Solution - NEW */}
          <div className="prose prose-invert prose-lg max-w-none text-white mb-12">
            {/* <h2 className="text-3xl font-bold mb-6">Solution</h2> */}
            <ReactMarkdown>{blogData.solution}</ReactMarkdown>
          </div>
          
          {/* Charts Section */}
          {blogData.charts && blogData.charts.length > 0 && (
            <div className="mt-16">
              {/* <h2 className="text-3xl font-bold mb-16 text-center text-white">Key Statistics</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {blogData.charts.map((chart, index) => {
            // Add debug log for each chart
            console.log('Rendering chart:', chart);
            if (!chart.title || !chart.percentage) {
              console.warn('Invalid chart data:', chart);
            }
            return (
              <AnimatedCircleChart
                key={index}
                percentage={chart.percentage || 0}
                title={chart.title || ""}
                color={index === 0 ? '#2563EB' : '#F97316'}
              />
            );
          })}
              </div>
            </div>
          )}

          {/* Conclusion - NEW */}
          <div className="prose prose-invert prose-lg max-w-none text-white mt-16 mb-12">
            {/* <h2 className="text-3xl font-bold mb-6">Conclusion</h2> */}
            <ReactMarkdown>{blogData.conclusion}</ReactMarkdown>
          </div>

          {/* Button */}
          <div className="mt-16 text-center">
            <Link 
              href="/blogs" 
              className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              More Blogs
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}