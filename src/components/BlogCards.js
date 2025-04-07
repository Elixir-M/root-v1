


// 'use client';

// import { useState, useEffect } from 'react';

// export default function BlogCards() {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     fetch('/api/cards')
//       .then(res => res.json())
//       .then(data => setCards(data.data))
//       .catch(err => console.error('Error fetching cards:', err));
//   }, []);

//   if (!cards || cards.length === 0) {
//     return (
//       <div className="min-h-screen bg-black py-12">
//         <div className="max-w-screen-xl mx-auto px-4">
//           <div className="text-center text-white">
//             <p>No blog posts available</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="relative  bg-black py-4">
//       <div className=" mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
//           {cards.map((card) => (
//             <article key={card.id} className="flex flex-col group border border-white/20 rounded-2xl p-4">
//               <a href={`/blogs/${card.pageName}`} className="w-full">
//                 <div className="overflow-hidden rounded-lg">
//                   <img
//                     src={card.imageUrl}
//                     alt={card.title}
//                     className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//               </a>
              
//               <div className="flex flex-col mt-6 space-y-2">
//                 <h3 className="text-xl font-bold text-white">{card.title}</h3>
//                 <p className="text-gray-400 text-base">{card.description}</p>
                
//                 <a 
//                   href={`/blogs/${card.pageName}`} 
//                   className="inline-flex items-center mt-2"
//                 >
//                   <span className="text-base font-semibold text-white relative">
//                     <span className="relative">
//                       Read Now
//                       <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//                     </span>
//                   </span>
//                   <svg 
//                     className="w-3 h-3 ml-2 text-white"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useState, useEffect } from 'react';
// import Select from 'react-select'; // Import react-select

// const serviceOptions = [
//   { value: 'all', label: 'All Blogs' },
//   { value: 'blockchain', label: 'Blockchain' },
//   { value: 'mobile dev', label: 'Mobile Development' },
//   { value: 'app dev', label: 'App Development' },
//   { value: 'web dev', label: 'Web Development' },
//   { value: 'ai and ml', label: 'Artificial Intelligence and Machine Learning' },
//   { value: 'cms', label: 'CMS' },
//   { value: 'iot', label: 'IoT' },
//   { value: 'graphic design', label: 'Graphic Design' },
//   { value: 'quality assurance and testing', label: 'Quality Assurance and Testing' },
//   { value: 'game dev', label: 'Game Development' },
//   { value: 'supply chain', label: 'Supply Chain' },
//   { value: 'cybersec', label: 'Cybersecurity' },
//   { value: 'digital marketting and branding', label: 'Digital Marketing and Branding' },
//   { value: 'cloud solutions', label: 'Cloud Solutions' },
//   { value: 'system integration services', label: 'System Integration Services' },
// ];

// export default function BlogCards() {
//   const [cards, setCards] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([{ value: 'all', label: 'All Blogs' }]);

//   useEffect(() => {
//     const fetchCards = async () => {
//       let url = '/api/cards';
//       if (selectedServices.length > 0 && !selectedServices.some(s => s.value === 'all')) {
//         const query = selectedServices.map(s => `service=${encodeURIComponent(s.value)}`).join('&');
//         url = `/api/cards/filter?${query}`;
//       }

//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         setCards(data.data || []);
//       } catch (err) {
//         console.error('Error fetching cards:', err);
//       }
//     };

//     fetchCards();
//   }, [selectedServices]);

//   const handleServiceChange = (selectedOptions) => {
//     // If 'all' is selected, ignore others and only show all blogs
//     if (selectedOptions.some(option => option.value === 'all')) {
//       setSelectedServices([{ value: 'all', label: 'All Blogs' }]);
//     } else {
//       setSelectedServices(selectedOptions);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black py-12">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <div className="mb-6 text-white">
//           <label htmlFor="serviceFilter" className="block mb-2 text-lg font-semibold">Filter by Service</label>
//           <Select
//             id="serviceFilter"
//             isMulti
//             options={serviceOptions}
//             value={selectedServices}
//             onChange={handleServiceChange}
//             className="text-black"
//           />
//         </div>

//         {cards.length === 0 ? (
//           <div className="text-center text-white">
//             <p>No blog posts available</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {cards.map((card) => (
//               <article key={card.pageName} className="flex flex-col group border border-white/20 rounded-2xl p-4">
//                 <a href={`/blogs/${card.pageName}`} className="w-full">
//                   <div className="overflow-hidden rounded-lg">
//                     <img
//                       src={card.imageUrl}
//                       alt={card.title}
//                       className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>
//                 </a>
//                 <div className="flex flex-col mt-6 space-y-2">
//                   <h3 className="text-xl font-bold text-white">{card.title}</h3>
//                   <p className="text-gray-400 text-base">{card.description}</p>
//                   <a href={`/blogs/${card.pageName}`} className="inline-flex items-center mt-2">
//                     <span className="text-base font-semibold text-white relative">
//                       <span className="relative">
//                         Read Now
//                         <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//                       </span>
//                     </span>
//                     <svg className="w-3 h-3 ml-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M5 12h14M12 5l7 7-7 7" />
//                     </svg>
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';

const serviceOptions = [
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'mobile dev', label: 'Mobile Development' },
  { value: 'app dev', label: 'App Development' },
  { value: 'web dev', label: 'Web Development' },
  { value: 'ai and ml', label: 'Artificial Intelligence and Machine Learning' },
  { value: 'cms', label: 'CMS' },
  { value: 'iot', label: 'IoT' },
  { value: 'graphic design', label: 'Graphic Design' },
  { value: 'quality assurance and testing', label: 'Quality Assurance and Testing' },
  { value: 'game dev', label: 'Game Development' },
  { value: 'supply chain', label: 'Supply Chain' },
  { value: 'cybersec', label: 'Cybersecurity' },
  { value: 'digital marketting and branding', label: 'Digital Marketing and Branding' },
  { value: 'cloud solutions', label: 'Cloud Solutions' },
  { value: 'system integration services', label: 'System Integration Services' },
];

export default function BlogCards() {
  const [cards, setCards] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      let url = '/api/cards/filter';
      if (selectedServices.length > 0) {
        const query = selectedServices.map(s => `service=${encodeURIComponent(s.value)}`).join('&');
        url = `/api/cards/filter?${query}`;
      } else {
        url = '/api/cards/filter'; // Fetch all when no filters
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setCards(data.data || []);
      } catch (err) {
        console.error('Error fetching cards:', err);
      }
    };

    fetchCards();
  }, [selectedServices]);

  const handleServiceChange = (selectedOptions) => {
    setSelectedServices(selectedOptions);
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-6 text-white">
          <label htmlFor="serviceFilter" className="block mb-2 text-lg font-semibold">Filter by Service</label>
          <Select
            id="serviceFilter"
            isMulti
            options={serviceOptions}
            value={selectedServices}
            onChange={handleServiceChange}
            className="text-black"
          />
        </div>

        {cards.length === 0 ? (
          <div className="text-center text-white">
            <p>No blog posts available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cards.map((card) => (
              <article key={card.pageName} className="flex flex-col group border border-white/20 rounded-2xl p-4">
                <a href={`/blogs/${card.pageName}`} className="w-full">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </a>
                <div className="flex flex-col mt-6 space-y-2">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-gray-400 text-base">{card.description}</p>
                  <a href={`/blogs/${card.pageName}`} className="inline-flex items-center mt-2">
                    <span className="text-base font-semibold text-white relative">
                      <span className="relative">
                        Read Now
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </span>
                    <svg className="w-3 h-3 ml-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}