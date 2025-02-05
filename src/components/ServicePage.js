'use client';

import React from 'react';

const ServicePage = ({ serviceData, projectsData }) => {
  const scrollToNextSection = () => {
    const gridSection = document.getElementById('projects-grid');
    gridSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#001219]">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={serviceData.heroImage}
            alt={serviceData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#001219]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {serviceData.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8">
            {serviceData.description}
          </p>

          <div
            onClick={scrollToNextSection}
            className="absolute bottom-16 cursor-pointer hover:translate-y-[-5px] transition-transform duration-300"
          >
            <svg 
              className="w-12 h-12 text-white"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Projects Section */}
           
  <div id="projects-grid" className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent via-[#001219] to-black">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project) => (
        <div key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden">
          {/* Image container with hover effect */}
          <div className="p-2"> 
          <div 
            className="relative h-64 cursor-pointer p-4 rounded-xl"
            onClick={() => window.location.href = `/portfolio/${serviceData.slug}/${project.slug}`}
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 "
            />
            </div>
          </div>
          </div>
          {/* Content section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            {/* Tech stack buttons */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
          </div>
        </div>
    </div>
  );
};

export default ServicePage;