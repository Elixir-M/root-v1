"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WobbleCardDemo } from './WobbleCard';
import { ThreeDCard, ThreeDCardGrid } from "@/components/3DCardEffect";
import { CaseStudyGrid, sampleCases } from "@/components/CaseStudyGrid";
import caseStudiesData  from '@/data/caseStudiesData';



const ServicePageTemplate = ({ serviceName, tagline, videoUrl }) => {
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Initial white screen with animations */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 1, ease: "easeInOut", delay: 2.5 }}
        className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      >
        <div className="relative w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            {!showLogo ? (
              <motion.h1
                key="serviceName"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ 
                  opacity: 0,
                  scale: 1.1,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-black text-6xl md:text-7xl lg:text-8xl font-bold absolute"
              >
                {serviceName}
              </motion.h1>
            ) : (
              <motion.div
                key="logoContainer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="absolute"
              >
                <motion.img
                  src="/assets/img/Logo.png"
                  alt="Company Logo"
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain invert"
                  style={{ filter: 'brightness(0)' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>


      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen w-full"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#001219]" />
          {/* Overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {serviceName}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl max-w-2xl"
          >
            {tagline}
          </motion.p>

          {/* Custom scroll button image */}
          <motion.img
                src="/assets/img/Arrow_Down.png"
                alt="Scroll to next section"
                onClick={scrollToNextSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: { duration: 0.8 } }}
                whileHover={{ 
                    y: [-5, 5],
                    transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                    }
                }}
                className="absolute bottom-8 w-16 h-16 cursor-pointer"
            />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-[#001219]/80 to-[#001219]" />
      </motion.div>

{/* Cards  */}
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[#001219] via-[#001219] to-black" />
      <div className='relative z-10'>
          <ThreeDCardGrid>
          <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />
        <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />
          <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />
          <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />   
          <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />
          <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />
          <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />
          <ThreeDCard
              imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
              title="First Card"
              description="Description for first card"
              tryNowLink="https://example.com/1"
          />
            
          </ThreeDCardGrid>
      </div>
    </div>


{/* Case Study  */}
<CaseStudyGrid cases={caseStudiesData.blockchain} />

    </div>
  );
};

export default ServicePageTemplate;