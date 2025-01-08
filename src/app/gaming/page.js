import React from "react";
import Spline from "@splinetool/react-spline";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>
        <Spline
        scene="https://prod.spline.design/BPtOupBpmaTKI0fu/scene.splinecode"/>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;
