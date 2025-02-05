import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import PortfolioPage from "@/components/PortfolioPage";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <PortfolioPage/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;


