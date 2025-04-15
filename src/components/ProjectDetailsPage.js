"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamically import Slider for client-side only
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Gradient Separator Component
const GradientSeparator = () => (
  <div className="my-16 h-px bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-60"></div>
);

// Define a palette of colors for random selection
const techColorPalette = [
  "#F7DF1E", // JavaScript Yellow
  "#61DAFB", // React Blue
  "#4FC08D", // Vue Green
  "#38B2AC", // Tailwind Teal
  "#805AD5", // Chakra Purple
  "#F56565", // Red
  "#ED8936", // Orange
  "#4299E1", // Blue
  "#38A169", // Green
  "#0BC5EA", // Cyan
  "#E53E3E", // Red (Darker)
  "#DD6B20", // Orange (Darker)
  "#D53F8C", // Pink
  "#6B46C1", // Indigo
];

const ProjectDetailPage = ({ project }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
  };

  // Note: Current date/time check based on request context.
  // This doesn't affect the UI logic itself.
  // As of April 15, 2025 at 3:36 PM IST
  if (!isClient) {
    return (
      <div className="bg-black text-gray-400 min-h-screen flex items-center justify-center">
        Loading Project Details...
      </div>
    );
  }

  return (
    <>
      <Navbar className="top-2" />
      <div className="bg-black min-h-screen py-16 font-sans">
        <br />
        <br />
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-md tracking-wide">
            {project.title}
          </h1>

          {/* --- Section: Gallery + Para1 --- */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Image Carousel */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900">
                {project.gallery?.length > 0 ? (
                  <Slider {...settings}>
                    {project.gallery.map((img, index) => (
                      <div key={index}>
                        <img
                          src={img}
                          alt={`${project.title} image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No images available
                  </div>
                )}
              </div>
            </div>

            {/* Para 1 - Inside a dark grey box with light gray text */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-md w-full">
                <motion.div
                  className="text-lg text-gray-200 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: project.para1 }} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* --- Styled Separator --- */}
          <GradientSeparator />

          {/* --- Section: Para 2 + Tech Stack --- */}
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
            {/* Para 2 - Inside a dark grey box */}
            <div className="w-full lg:w-3/4">
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-md h-full">
                <motion.div
                  className="text-lg text-gray-200 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: project.para2 }} />
                </motion.div>
              </div>
            </div>

            {/* Randomized Tech Stack */}
            <div className="w-full lg:w-1/4">
              <h4 className="text-2xl font-semibold text-purple-400 border-b border-gray-700 pb-3 mb-5">
                Tech Stack
              </h4>
              <div className="space-y-3">
                {project.techStacks.map((tech, i) => {
                  // Select a random color from the palette for each item
                  const randomColor =
                    techColorPalette[
                      Math.floor(Math.random() * techColorPalette.length)
                    ];

                  return (
                    <motion.div
                      key={tech.name + i} // Use a more stable key if possible
                      className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-700/50 hover:border-gray-600 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: "rgb(55 65 81)",
                      }} // gray-700
                    >
                      {/* Randomized Color Accent Border */}
                      <div
                        className="w-1.5 h-8 self-stretch flex-shrink-0" // Added flex-shrink-0
                        style={{ backgroundColor: randomColor }}
                      ></div>

                      {/* Tech Name */}
                      <span className="pl-3 pr-4 py-1.5 text-gray-200 text-sm font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* --- Styled Separator --- */}
          <GradientSeparator />

          {/* --- Section: Stats --- */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-lg">
            <h4 className="text-2xl font-semibold text-purple-400 border-b border-gray-700 pb-3 mb-6">
              Project Stats
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {project.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800 p-4 rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-shadow duration-300 transform hover:-translate-y-1 text-center cursor-default"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Styled Separator --- */}
          <GradientSeparator />

          {/* --- Section: Final Paragraph --- */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-md w-full">
              <motion.div
                className="text-lg text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div dangerouslySetInnerHTML={{ __html: project.para3 }} />
              </motion.div>
            </div>
          </div>
        </div>{" "}
        {/* End Main Container */}
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
