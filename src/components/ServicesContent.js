'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceSection = ({ heading, description, animateFrom = 'right' }) => {
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

  const shapeVariants = {
    hidden: { opacity: 0, x: animateFrom === 'right' ? 100 : -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const isFromRight = animateFrom === 'right';

  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden bg-white flex items-center justify-center">
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main Rectangle - Black gradient */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={controls}
          variants={shapeVariants}
          className={`absolute ${isFromRight ? 'right-0' : 'left-0'} top-0 h-full w-2/5`}
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #333333 100%)'
          }}
        />
        
        {/* Triangle - Black with transparency */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={controls}
          variants={shapeVariants}
          className={`absolute ${isFromRight ? 'right-20' : 'left-20'} top-40`}
          style={{
            width: '200px',
            height: '200px',
            background: 'rgba(0, 0, 0, 0.7)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        
        {/* Circle - Lighter black */}
        <motion.div
          custom={2}
          initial="hidden"
          animate={controls}
          variants={shapeVariants}
          className={`absolute ${isFromRight ? 'right-60' : 'left-60'} bottom-40 rounded-full`}
          style={{
            width: '150px',
            height: '150px',
            background: 'linear-gradient(45deg, #1a1a1a 0%, #4d4d4d 100%)'
          }}
        />
      </div>

      {/* Enhanced Glassmorphism Content */}
      <div className="relative z-10 container mx-auto px-6 flex justify-center items-center">
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
          className="max-w-3xl backdrop-blur-md bg-white/60 rounded-xl p-10 shadow-xl border border-white/40"
          style={{
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(12px)'
          }}
        >
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {heading}
          </h1>
          
          {/* Line Divider - Darker for better contrast */}
          <div className="w-full h-px bg-gray-400 mb-6"></div>
          
          <p className="text-xl text-gray-800 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;