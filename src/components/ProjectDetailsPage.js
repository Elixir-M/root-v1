// export default ProjectDetailsPage;
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import the Slider (react-slick) component with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetailPage = ({ project }) => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
  };

  if (!isClient) {
    // Return an empty div or loading state while the component is loading
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <p className="text-center text-white bg-gradient-to-r from-purple-800 via-pink-500 to-red-500 p-4 rounded-2xl shadow-lg text-3xl font-semibold">
        {project.title}
      </p>
      <br />

      <br />
      {/* Top Section: Gallery + Para 1 */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Image Gallery (Carousel) */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            {project.gallery?.length > 0 ? (
              <Slider {...settings}>
                {project.gallery.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`${project.title} image ${index + 1}`}
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400">
                No images available
              </div>
            )}
          </div>
        </div>

        {/* Paragraph 1 */}
        <div className="w-full lg:w-1/2 flex items-center">
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div dangerouslySetInnerHTML={{ __html: project.para1 }} />
          </motion.p>
        </div>
      </div>
      {/* Middle Section: Para 2 + TechStacks */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="w-full lg:w-3/4">
          <p className="text-lg text-gray-300 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: project.para2 }} />
          </p>
        </div>

        <div className="w-full lg:w-1/4 space-y-3">
          <h4 className="text-xl font-semibold mb-3 text-white">Tech Stacks</h4>
          {project.techStacks.map((tech, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: tech.color }}
              ></span>
              <span className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Stats Table */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-md mb-12">
        <h4 className="text-xl font-semibold mb-4">Project Stats</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-4 rounded-xl hover:shadow-lg hover:shadow-emerald-500 transition duration-300 text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Section: Para 3 */}
      <div className="max-w-5xl mx-auto">
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          <div dangerouslySetInnerHTML={{ __html: project.para3 }} />
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
