import React from "react";
import Footer from "@/components/Footer";
import ServicePage from '@/components/ServicePage';
import { Navbar } from "@/components/Navbar";
const serviceData = {
    slug: 'blockchain',
    title: 'Blockchain Solutions',
    description: 'Enterprise blockchain solutions with smart contracts and DLT technology',
    heroImage: 'https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

const projectsData = [
    {
        id: 1,
        slug: 'student-dao',
        title: 'StudyDAO',
        description: 'Decentralized educational platform leveraging blockchain for transparent knowledge sharing',
        image: '/assets/img/studydao.png',
        techStack: ['Solidity', 'React', 'Javascript', 'Hardhat', 'IPFS', 'Tailwind CSS']
    },
    {
        id: 2,
        slug: 'meta-gallery',
        title: 'Meta Gallery',
        description: 'Metaverse-based NFT platform for digital art exhibitions',
        image: '/images/projects/blockchain/meta-gallery.jpg',
        techStack: ['Three.js', 'React', 'Solidity', 'Node.js', 'WebGL']
    },
    {
        id: 3,
        slug: 'dao',
        title: 'StudyDAO',
        description: 'Decentralized educational platform leveraging blockchain for transparent knowledge sharing',
        image: '/assets/img/studydao.png',
        techStack: ['Solidity', 'React', 'Javascript', 'Hardhat', 'IPFS', 'Tailwind CSS']
    },
];

const Page = () => {
    return (
      <div className="bg-black text-white">
        <Navbar className="top-2"/>
  
        <ServicePage 
      serviceData={serviceData} 
      projectsData={projectsData} 
    />
  
        {/* Footer Section */}
        <Footer />
      </div>
    );
  };
  
  export default Page;