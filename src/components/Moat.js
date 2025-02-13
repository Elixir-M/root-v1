"use client";
import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';




const MoatPage = ({ titleName, tagline, videoUrl, gradientshade }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {


    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => {
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
          <div className={`absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-${gradientshade}`} />
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
           {titleName}
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
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-[#1a0033]/80 to-[#1a0033]" />
      </motion.div>

    </div>
  );
};

export default MoatPage;