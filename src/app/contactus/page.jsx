"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import ContactUsHero from "@/components/cotactus/hero";
import { black } from "tailwindcss/colors";
import ContactInfo from "@/components/cotactus/ConatctInfo";
import Map from "@/components/cotactus/Map";
import ContactForm from "@/components/cotactus/ContactForm";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div className="min-h-screen" style={{ backgroundColor: black }}>
      <div
        className="relative overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
      >
        {/* White Glow Cursor Effect */}
        <div
          className="pointer-events-none absolute w-24 h-24 bg-white opacity-50 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 transition-all ease-out"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
          }}
        />
        '
        <Navbar className="top-2" />
        <ContactInfo />
        <Map />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
