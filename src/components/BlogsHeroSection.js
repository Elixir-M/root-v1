"use client"
import React, { useState, useEffect } from 'react';

const BlogsHeroSection = () => {
  const sections = [
    {
      id: 1,
      bgColor: 'bg-gradient-to-br from-indigo-900 to-black',
      heading: 'Share your technology stories',
      subheading: 'Create a unique and beautiful tech blog easily.',
      mainImage: '/api/placeholder/800/500',
      sideElements: {
        left: [
          { src: '/api/placeholder/200/200', exitDelay: 100, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 200, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 300, size: 'w-28' },
          { src: '/api/placeholder/200/200', exitDelay: 400, size: 'w-36' },
          { src: '/api/placeholder/200/200', exitDelay: 500, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 600, size: 'w-32' }
        ],
        right: [
          { src: '/api/placeholder/200/200', exitDelay: 150, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 250, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 350, size: 'w-36' },
          { src: '/api/placeholder/200/200', exitDelay: 450, size: 'w-28' },
          { src: '/api/placeholder/200/200', exitDelay: 550, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 650, size: 'w-24' }
        ]
      }
    },
    {
      id: 2,
      bgColor: 'bg-gradient-to-br from-violet-900  to-black',
      heading: 'Document your journey',
      subheading: 'Build your perfect blog today.',
      mainImage: '/api/placeholder/800/500',
      sideElements: {
        left: [
          { src: '/api/placeholder/200/200', exitDelay: 100, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 200, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 300, size: 'w-36' },
          { src: '/api/placeholder/200/200', exitDelay: 400, size: 'w-28' },
          { src: '/api/placeholder/200/200', exitDelay: 500, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 600, size: 'w-24' }
        ],
        right: [
          { src: '/api/placeholder/200/200', exitDelay: 150, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 250, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 350, size: 'w-28' },
          { src: '/api/placeholder/200/200', exitDelay: 450, size: 'w-36' },
          { src: '/api/placeholder/200/200', exitDelay: 550, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 650, size: 'w-32' }
        ]
      }
    },
    {
      id: 3,
      bgColor: 'bg-gradient-to-br from-blue-900 to-black',
      heading: 'Express your creativity',
      subheading: 'Let your imagination flow.',
      mainImage: '/api/placeholder/800/500',
      sideElements: {
        left: [
          { src: '/api/placeholder/200/200', exitDelay: 100, size: 'w-28' },
          { src: '/api/placeholder/200/200', exitDelay: 200, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 300, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 400, size: 'w-36' },
          { src: '/api/placeholder/200/200', exitDelay: 500, size: 'w-28' },
          { src: '/api/placeholder/200/200', exitDelay: 600, size: 'w-32' }
        ],
        right: [
          { src: '/api/placeholder/200/200', exitDelay: 150, size: 'w-36' },
          { src: '/api/placeholder/200/200', exitDelay: 250, size: 'w-28' },
          { src: '/api/placeholder/200/200', exitDelay: 350, size: 'w-32' },
          { src: '/api/placeholder/200/200', exitDelay: 450, size: 'w-24' },
          { src: '/api/placeholder/200/200', exitDelay: 550, size: 'w-36' },
          { src: '/api/placeholder/200/200', exitDelay: 650, size: 'w-28' }
        ]
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLeaving(true);
      
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % sections.length);
        setIsLeaving(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageStyles = (exitDelay) => {
    if (isLeaving) {
      return {
        transform: 'translateY(100%)',
        opacity: 0,
        transition: 'transform 0.7s ease, opacity 0.7s ease',
        transitionDelay: `${exitDelay}ms`
      };
    }
    return {
      transform: 'translateY(0)',
      opacity: 1,
      transition: 'transform 0.7s ease, opacity 0.7s ease'
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Color */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ease-in-out ${
          sections[activeIndex].bgColor
        }`}
      />

      {/* Content Container */}
      <div className="relative h-full max-w-full mx-auto px-4">
        {/* Header Text */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center text-white z-10 w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {sections[activeIndex].heading}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {sections[activeIndex].subheading}
          </p>
          
        </div>

        {/* Images Container */}
        <div className="absolute bottom-0 w-full">
          <div className="w-full flex justify-between items-end">
            {/* Left Elements Grid */}
            <div className="w-1/3 grid grid-cols-2 gap-4 pb-8">
              {sections[activeIndex].sideElements.left.map((element, i) => (
                <div 
                  key={i}
                  style={getImageStyles(element.exitDelay)}
                >
                  <img
                    src={element.src}
                    alt={`Left element ${i + 1}`}
                    className={`${element.size} h-auto opacity-60`}
                  />
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="w-1/3 hidden md:block px-4">
              <div style={getImageStyles(300)}>
                <img
                  src={sections[activeIndex].mainImage}
                  alt="Main preview"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Right Elements Grid */}
            <div className="w-1/3 grid grid-cols-2 gap-4 pb-8">
              {sections[activeIndex].sideElements.right.map((element, i) => (
                <div 
                  key={i}
                  style={getImageStyles(element.exitDelay)}
                >
                  <img
                    src={element.src}
                    alt={`Right element ${i + 1}`}
                    className={`${element.size} h-auto opacity-60`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeroSection;