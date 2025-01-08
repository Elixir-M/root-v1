"use client"
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'; 

export function CustomVid({videoSrc, heading, content}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.muted = true; 
      video.loop = true;
    }
  }, []);

  return (
    <section className="relative h-[50vh] bg-black"> 
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover" 
      >
        {/* <source src="https://videos.pexels.com/video-files/5223113/5223113-hd_2560_1440_30fps.mp4"  type="video/mp4" /> */}
        <source src={videoSrc} type = "video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50">

      <div className="absolute text-white inset-0 flex flex-col justify-center items-start px-10 max-w-screen-xl">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">{heading}</h1>
        <p className="mt-4 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">{content}</p>   
      </div>
          
      </div>
    </section>
  );
}

export default CustomVid;