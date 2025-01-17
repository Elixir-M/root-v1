import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import BlogsHeroSection from "@/components/BlogsHeroSection";



const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <BlogsHeroSection/>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;