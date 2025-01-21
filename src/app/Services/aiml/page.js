import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServicePageTemplate from "@/components/ServicePageTemplate";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <ServicePageTemplate 
        serviceName="AI & ML"
        tagline="Empowering Innovation with Smarter AI & ML Solutions"
        videoUrl="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4"
        gradientshade="#001219"
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;


