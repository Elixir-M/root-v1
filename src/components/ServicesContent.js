'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const ServiceSection = ({ 
  heading, 
  description, 
  animateFrom = 'right',
  image1Path,
  image2Path,
  image1Size = { width: 200, height: 200 },
  image2Size = { width: 150, height: 150 },
  image1Position = { top: '20%' },
  image2Position = { bottom: '20%' }
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, x: animateFrom === 'right' ? 100 : -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const isFromRight = animateFrom === 'right';

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient overlay for enhanced depth */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated SVG Images with responsive positioning */}
      <div className="absolute inset-0 w-full h-full">
        {/* First Image */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className={`absolute ${isFromRight ? 'right-[5%] lg:right-[10%]' : 'left-[5%] lg:left-[10%]'} 
            transition-all duration-300 ease-in-out`}
          style={{
            ...image1Position,
            width: image1Size.width,
            height: image1Size.height,
            maxWidth: '25vw',
            maxHeight: '25vw'
          }}
        >
          <Image
            src={image1Path}
            alt="Decorative SVG 1"
            width={image1Size.width}
            height={image1Size.height}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
        
        {/* Second Image */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className={`absolute ${isFromRight ? 'right-[15%] lg:right-[25%]' : 'left-[15%] lg:left-[25%]'} 
            transition-all duration-300 ease-in-out`}
          style={{
            ...image2Position,
            width: image2Size.width,
            height: image2Size.height,
            maxWidth: '20vw',
            maxHeight: '20vw'
          }}
        >
          <Image
            src={image2Path}
            alt="Decorative SVG 2"
            width={image2Size.width}
            height={image2Size.height}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Enhanced Glassmorphism Content */}
      <div className="relative z-10 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5, duration: 0.7 }
            }
          }}
          className="w-full backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-12 lg:p-16 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20
            hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)] 
            transition-all duration-300 ease-in-out"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
            {heading}
          </h1>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8" />
          
          <p className="text-sm sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;