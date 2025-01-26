"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhiteScreenAnimation = ({ serviceName, onAnimationComplete }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    return () => {
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 2.5 }}
      onAnimationComplete={onAnimationComplete}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
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
              className="text-white text-6xl md:text-7xl lg:text-8xl font-bold absolute"
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
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WhiteScreenAnimation;