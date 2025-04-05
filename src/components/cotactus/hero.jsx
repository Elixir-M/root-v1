"use client";
import React, { useState } from "react";
import Link from "next/link";

const ContactUsHero = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.3), #11041a 15%)`,
          transition: "background-position 0.1s ease",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-full h-40 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(17,4,26,1), #000000)",
        }}
      />
      <div className="relative z-10">
        <h1 className="font-bold text-[4rem]">Contact Us</h1>
        <div className="mt-4 text-lg text-gray-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-400">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
