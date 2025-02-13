import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import MoatPage from "@/components/Moat";
import MoatsSection from "@/components/MoatSection";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <MoatPage 
        titleName="MOATS"
        tagline="Empowering Tomorrow"
        videoUrl="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4"
        gradientshade="#000435"
      />
      <MoatsSection/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;


