'use client'
import React, { useState } from "react";

const ProjectCard = ({ id, image, title, description, techStacks = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-10">
      <div
        className={`bg-slate-950 rounded-2xl overflow-hidden h-full transition-all duration-300 ease-in-out ${
          isHovered ? "shadow-lg shadow-blue-700" : "shadow-none"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <a href={`/projects/${id}`}>
        <div className="p-4">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
        </a>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          {/* Tech stack buttons */}
          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
