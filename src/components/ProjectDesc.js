'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDescription = ({ 
  images = [], // Array of image URLs
  techStack = [], // Array of {name: string, color: string}
  description = "", // Project description text
  title = "Project Title" // Project title
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8 mt-14">{title}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
        {/* Image Carousel Section */}
        <div className="lg:col-span-3 relative overflow-hidden rounded-2xl h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            {images.length > 0 && (
              <img
                src={images[currentImage]}
                alt={`Project image ${currentImage + 1}`}
                className="object-cover w-full h-full"
              />
            )}
            
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 flex gap-2 justify-center w-full">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

         
          {/* Tech Stack Section */}
        <div className="lg:col-span-2 bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Header with background image */}
          <div className="relative h-40 mb-4">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Technology background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            </div>
            <h2 className="text-3xl font-bold relative z-10 p-8">Technology Stack</h2>
          </div>
          {/* Tech stack items */}
          <div className="p-8 pt-0">
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm"
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Project Description</h2>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDescription;