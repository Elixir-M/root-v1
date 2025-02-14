// import React from 'react';

// const CaseStudyCard = ({ image, title, description, link }) => {
//   return (
//     <div className="w-full group">
//       <div className="space-y-4">
//         <a href={link} className="block">
//           <div className="overflow-hidden rounded-lg mb-6">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>
//         </a>
        
//         <h3 className="text-2xl font-bold text-black">{title}</h3>
//         <p className="text-gray-600 text-lg">{description}</p>
        
//         <a href={link} className="inline-flex items-center space-x-2 text-black">
//           <span className="text-lg font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
//             Read Now
//           </span>
//           <svg 
//             className="w-4 h-4"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

import React from 'react';

const CaseStudyCard = ({ imageUrl, title, description, pageName }) => {
  return (
    <div className="w-full group">
      <div className="space-y-4">
        <a href={`/blogs/${pageName}`} className="block">
          <div className="overflow-hidden rounded-lg mb-6">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </a>
        
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
        
        <a href={`/blogs/${pageName}`} className="inline-flex items-center space-x-2 text-black">
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

// const CaseStudyGrid = ({ cases }) => {
//   return (
//     <div className="relative w-full">
      
//       {/* Main content with white background */}
//       <div className="relative bg-white pt-32 pb-32">
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {cases.map((caseStudy, index) => (
//               <CaseStudyCard
//                 key={index}
//                 image={caseStudy.image}
//                 title={caseStudy.title}
//                 description={caseStudy.description}
//                 link={caseStudy.link}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export { CaseStudyGrid};


const CaseStudyGrid = ({ service }) => {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`/api/cards/services/${service}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [service]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative w-full">
      <div className="relative bg-white pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cards.map((card) => (
              <CaseStudyCard
                key={card.pageName}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
                pageName={card.pageName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CaseStudyGrid };