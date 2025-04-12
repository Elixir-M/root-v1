// src/app/services/[servicename]/page.js

import React from "react";
import servicesData from "@/data/servicesData"; // Assuming you have a separate file for services data
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import TechStackCard, { ThreeDCardGrid, ThreeDCard, TechStackGrid } from "@/components/3DCardEffect";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import ServiceSection from "@/components/ServicesContent";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData";

const ServicePage = ({ params }) => {
  const { servicename } = params; // Get the service name from params

  const service = servicesData[servicename]; 
  const serviceProjects = projectsData[servicename] || []; // Get the respective service projects from the data

  if (!service) {
    return <div className="text-white p-10">Service not found.</div>;
  }

  return (
    <div className="bg-black text-white">
      <Navbar className="top-2" />

      <ServicePageTemplate
        serviceName={service.serviceName}
        tagline={service.tagline}
        videoUrl={service.videoUrl}
        gradientshade={service.gradientshade}
      />

      <div className="relative w-full">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10">
          <TechStackGrid>
            {service.cards.map((card, idx) => (
              <TechStackCard
                key={idx}
                imgSrc={card.imgSrc}
                techName={card.techName}
                description={card.description}
                features={card.features}
              />
            ))}
          </TechStackGrid>
        </div>
      </div>

      <ServiceSection
        heading={service.serviceSection.heading}
        description={service.serviceSection.description}
        image1Path={service.serviceSection.image1Path}
        image1Size={{ width: 200, height: 200 }}
        image1Position={{ top: "20%" }}
        animateFrom="left"
      />
     
      {/* Projects Section */}
      <div id="projects" className="py-16">
      <div className="text-center mb-2">
      <h2 className="text-4xl font-extrabold text-white relative inline-block px-4">
    Our Projects
    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-500 blur-sm opacity-80"></span>
  </h2>
</div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData[servicename]?.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              techStacks={project.techStacks}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <CaseStudyGrid service={service.queryname} />

      <Footer />
    </div>
  );
};

export default ServicePage;
