"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioPage = () => {
  const scrollToNextSection = () => {
    const gridSection = document.getElementById('portfolio-grid');
    gridSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized systems for modern business needs. Implementing smart contracts and distributed ledger technologies.',
      href: '/portfolio/blockchain'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1558885544-2defc62e2e2b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with intuitive UX/UI design for iOS and Android platforms.',
      href: '/portfolio/mobile-dev'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Web Development',
      description: 'Responsive, scalable web applications using cutting-edge technologies and frameworks for optimal performance.',
      href: '/portfolio/web-dev'
    },
    // {
    //   id: 4,
    //   image: '/api/placeholder/400/300',
    //   title: 'Application Development',
    //   description: 'Custom software solutions tailored to your business needs, from enterprise applications to specialized tools.',
    //   href: '/app-dev'
    // },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for automation, prediction, and data analysis to drive intelligent decision-making.',
      href: '/portfolio/ai-ml'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Internet of Things',
      description: 'Connected device solutions and IoT infrastructure for smart homes, industries, and cities.',
      href: '/portfolio/iot'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Graphic Design',
      description: 'Creative visual solutions including branding, UI/UX design, and marketing materials that capture your vision.',
      href: '/portfolio/design'
    },
    {
      id: 8,
      image: 'https://plus.unsplash.com/premium_photo-1661783512537-95fd8d054fa7?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive testing services ensuring software reliability, performance, and security.',
      href: '/portfolio/qa'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Game Development',
      description: 'Immersive gaming experiences across multiple platforms using latest game development technologies.',
      href: '/portfolio/game-dev'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Supply Chain Solutions',
      description: 'Digital transformation of supply chains with blockchain, IoT, and advanced analytics integration.',
      href: '/portfolio/supply-chain'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions protecting your digital assets from modern cyber threats.',
      href: '/portfolio/security'
    },
    {
      id: 12,
      image: 'https://plus.unsplash.com/premium_photo-1680700221535-a7aa2aa40a7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Digital Marketing & Branding',
      description: 'Strategic digital marketing solutions to enhance your brand presence and reach target audiences.',
      href: '/portfolio/marketing'
    },
    {
      id: 13,
      image: 'https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for optimal business operations.',
      href: '/portfolio/cloud'
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'System Integration Services',
      description: 'Seamless integration of multiple systems and applications for enhanced business efficiency.',
      href: '/portfolio/integration'
    }
  ];

  const handleItemClick = (href) => {
    window.location.href = href;
  };

  return (
    <div className="bg-[#001219]">
      {/* Hero Section */}
      <div
        className="relative min-h-screen w-full"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#001219]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Elixir Portfolio
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl max-w-2xl"
          >
           Innovative technology solutions for modern business challenges
          </p>

          {/* Scroll button */}
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

      {/* Portfolio Grid
      <div id="portfolio-grid" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => handleItemClick(item.href)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#001219]/0 group-hover:bg-[#001219]/80 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; */}



      {/* Portfolio Grid */}
      
      <div id="portfolio-grid" className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent via-[#001219] to-black">
        {/* Updated grid: 5 columns on xl, 3 on lg, 2 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg h-72 bg-gray-900 transform transition-transform duration-300 hover:-translate-y-2"
              onClick={() => handleItemClick(item.href)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Enhanced default title overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent">
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold transition-opacity duration-300 group-hover:opacity-0">
                  {item.title}
                </h3>
              </div>
              {/* Updated hover overlay with purple gradient */}
              <div className="absolute inset-0 group-hover:bg-[#001219]/80 opacity-0 group-hover:opacity-95 transition-all duration-300">
                <div className="flex flex-col items-center justify-center h-full p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
    
  );
};

export default PortfolioPage;