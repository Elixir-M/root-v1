import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BackgroundGradientAnimationDemo } from "@/components/GradientAnimation";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>
        <BackgroundGradientAnimationDemo/>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;
