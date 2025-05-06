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
        <source src="https://videos.pexels.com/video-files/8084616/8084616-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Bottom Black Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center px-6 sm:px-12">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Heading</h1>
          <p className="text-xl sm:text-2xl">Your subheading goes here</p>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
