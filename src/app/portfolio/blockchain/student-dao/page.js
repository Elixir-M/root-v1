import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ProjectDescription from "@/components/ProjectDesc";
const projectData = {
    title: "Student-Dao",
    images: [
      "/assets/img/studydao.png",
      "/assets/img/e-logo.png",
      "/assets/img/Logo.png"
    ],
    techStack: [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" },
        { name: "Tailwind CSS", color: "#38B2AC" },
        { name: "Node.js", color: "#339933" },
        { name: "MongoDB", color: "#47A248" },
        { name: "TypeScript", color: "#3178C6" }
      ],
    description: "This is a detailed description of the project..."
  };


const Page = () => {
    return (
      <div className="bg-black text-white">
        <Navbar className="top-2"/>
        <ProjectDescription title={projectData.title}
      images={projectData.images}
      techStack={projectData.techStack}
      description={projectData.description}
    />
       
  
        {/* Footer Section */}
        <Footer />
      </div>
    );
  };
  
  export default Page;