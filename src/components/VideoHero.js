'use client';
import React from 'react';

const VideoHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* <source src="https://videos.pexels.com/video-files/8084616/8084616-uhd_2560_1440_25fps.mp4" type="video/mp4" /> */}
        {<source src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4" type="video/mp4"/>}
        Your browser does not support the video tag.
      </video>
      {/* Blur & Dark Overlay */}
<div className="absolute top-0 left-0 w-full h-full bg-black/45 backdrop-blur-xs z-10" />


      {/* Bottom Black Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-12">
        <div className="text-white text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Empowering Innovation, Driving Transformation</h1>
          <p className="text-xl sm:text-2xl">Unlock the power of end-to-end IT consultation, development, and
          digital transformation. Your success is our mission.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
