import React from 'react';

const CaseStudyCard = ({ image, title, description, link }) => {
  return (
    <div className="w-full group">
      <div className="space-y-4">
        <a href={link} className="block">
          <div className="overflow-hidden rounded-lg mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </a>
        
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
        
        <a href={link} className="inline-flex items-center space-x-2 text-black">
          <span className="text-lg font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
            Read Now
          </span>
          <svg 
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const CaseStudyGrid = ({ cases }) => {
  return (
    <div className="relative w-full">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#001219] to-transparent z-10" />
      
      {/* Main content with white background */}
      <div className="relative bg-white pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cases.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                image={caseStudy.image}
                title={caseStudy.title}
                description={caseStudy.description}
                link={caseStudy.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

// Sample data structure
const sampleCases = [
    {
      image: "https://images.unsplash.com/photo-1735669356374-8ea7506cd1d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Turbocharge Efficiency Through Cloud Transformation",
      description: "Allegis Group envisioned one source of truth to streamline data analytics and insights across their operating companies with the Snowflake Data Cloud.",
      link: "/case-study/1"
    },
    {
      image: "https://images.unsplash.com/photo-1735669356374-8ea7506cd1d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Turbocharge Efficiency Through Cloud Transformation",
      description: "Allegis Group envisioned one source of truth to streamline data analytics and insights across their operating companies with the Snowflake Data Cloud.",
      link: "/case-study/1"
    },
    {
      image: "https://images.unsplash.com/photo-1735669356374-8ea7506cd1d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Turbocharge Efficiency Through Cloud Transformation",
      description: "Allegis Group envisioned one source of truth to streamline data analytics and insights across their operating companies with the Snowflake Data Cloud.",
      link: "/case-study/1"
    },
    {
      image: "https://images.unsplash.com/photo-1735669356374-8ea7506cd1d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Turbocharge Efficiency Through Cloud Transformation",
      description: "Allegis Group envisioned one source of truth to streamline data analytics and insights across their operating companies with the Snowflake Data Cloud.",
      link: "/case-study/1"
    }
  ];

export { CaseStudyGrid, sampleCases };