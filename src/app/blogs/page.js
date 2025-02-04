import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import BlogsHeroSection from "@/components/BlogsHeroSection";
import BlogCards from "@/components/BlogCards";



const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <BlogsHeroSection/>
      <BlogCards/>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;