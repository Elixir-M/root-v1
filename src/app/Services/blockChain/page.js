import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServicePageTemplate from "@/components/ServicePageTemplate";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <ServicePageTemplate 
        serviceName="Blockchain Solutions"
        tagline="Empowering Tomorrow with Secure and Scalable Blockchain Solutions"
        videoUrl="https://videos.pexels.com/video-files/7565438/7565438-hd_1080_1920_25fps.mp4"
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;


