import React from 'react';
import Spline from '@splinetool/react-spline/next';
import { Spotlight } from "./ui/spotlight";

const HeroSection = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center bg-black relative overflow-hidden z-10">
      <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
      <div className="max-w-7xl lg:h-2xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-8 lg:px-16 pt-5 md:pt-0 space-y-8 lg:space-y-0">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          {/* Conditional Rendering of <h1> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight hidden md:block xl:block">
            Spotlight is the Future
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-300 max-w-lg leading-relaxed">
            Experience the beauty of modern design with responsive layouts and a
            spotlight effect that draws attention to the essential elements of the page.
          </p>
        </div>

        {/* 3D Model */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
            <Spline
              scene="https://prod.spline.design/8fcFSxa15zPBmmEZ/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
