




// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Select from 'react-select';

// const serviceOptions = [
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
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const limit = 10;
//   const cardsRef = useRef(null); 
//   console.log('page:', page)
//   useEffect(() => {
//     const fetchCards = async () => {
//       let url = `/api/cards/filter?page=${page}`;
//       console.log(`Fetching page ${page} with services:`, selectedServices);

//       if (selectedServices.length > 0) {
//         const query = selectedServices.map(s => `service=${encodeURIComponent(s.value)}`).join('&');
//         url = `/api/cards/filter?page=${page}&${query}`;
//       }

//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         setCards(data.data || []);
//         setTotal(data.total || 0);
//       } catch (err) {
//         console.error('Error fetching cards:', err);
//       }
//     };

//     fetchCards();
//   }, [selectedServices, page]);
//   // useEffect(() => {
//   //   window.scrollTo({ top: 0, behavior: 'smooth' });
//   // }, [page]);
//   useEffect(() => {
//     if (cardsRef.current) {
//       cardsRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [page]);

//   const handleServiceChange = (selectedOptions) => {
//     setSelectedServices(selectedOptions);
//     setPage(1); // Reset to first page when filters change
//   };

//   const getServiceLabel = (value) => {
//     const match = serviceOptions.find(option => option.value === value);
//     return match ? match.label : value;
//   };

// return (
//   <div className="min-h-screen bg-black py-12">
//     <div className="max-w-screen-xl mx-auto px-4">
//       {/* Filter */}
//       <div className="mb-6 text-white">
//         <label htmlFor="serviceFilter" className="block mb-2 text-lg font-semibold">Filter by Service</label>
//         <Select
//           id="serviceFilter"
//           isMulti
//           options={serviceOptions}
//           value={selectedServices}
//           onChange={(selectedOptions) => {
//             setSelectedServices(selectedOptions);
//             setPage(1); // Reset to first page when filters change
//           }}
//           className="text-black"
//         />
//       </div>

//       {/* Blog Cards Section */}
//       <div ref={cardsRef}>
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
//                   <div className="mb-4">
//                     <p className="text-sm text-gray-600 mb-1">Services:</p>
//                     <div className="flex flex-wrap gap-1">
//                       {card.services
//                         .filter(service => service !== 'default')
//                         .map((service, idx) => (
//                           <span
//                             key={idx}
//                             className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
//                           >
//                             {getServiceLabel(service)}
//                           </span>
//                         ))}
//                     </div>
//                   </div>
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

//       {/* Pagination */}
//       {total > limit && (
//         <div className="flex justify-center items-center mt-10 gap-6 text-white">
//           <span className="text-sm">
//             {Math.min((page - 1) * limit + 1, total)}–{Math.min(page * limit, total)} of {total}
//           </span>
          
//           <button
//             onClick={() => setPage(prev => Math.max(1, prev - 1))}
//             disabled={page === 1}
//             className="px-2 py-1 rounded hover:bg-gray-700 disabled:opacity-50"
//           >
//             &#x276E;
//           </button>
          
//           <button
//             onClick={() => setPage(prev => prev + 1)}
//             disabled={page * limit >= total}
//             className="px-2 py-1 rounded hover:bg-gray-700 disabled:opacity-50"
//           >
//             &#x276F;
//           </button>
//         </div>
//       )}
//     </div>
//   </div>
// );

// }
'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;
  const blogCardsRef = useRef(null);

  // Scroll to top of page on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      let url = `/api/cards/filter?page=${page}`;
      if (selectedServices.length > 0) {
        const query = selectedServices.map(s => `service=${encodeURIComponent(s.value)}`).join('&');
        url = `/api/cards/filter?page=${page}&${query}`;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setCards(data.data || []);
        setTotal(data.total || 0);
      } catch (err) {
        console.error('Error fetching cards:', err);
      }
    };

    fetchCards();
  }, [selectedServices, page]);

  const handleServiceChange = (selectedOptions) => {
    setSelectedServices(selectedOptions);
    setPage(1);
  };

  const getServiceLabel = (value) => {
    const match = serviceOptions.find(option => option.value === value);
    return match ? match.label : value;
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Filter */}
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

        {/* Cards Section */}
        <div ref={blogCardsRef}>
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
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Services:</p>
                      <div className="flex flex-wrap gap-1">
                        {card.services
                          .filter(service => service !== 'default')
                          .map((service, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                            >
                              {getServiceLabel(service)}
                            </span>
                          ))}
                      </div>
                    </div>

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

        {/* Pagination Buttons */}
        {total > limit && (
          <div className="flex justify-center items-center mt-10 gap-6 text-white">
            <span className="text-sm">
              {Math.min((page - 1) * limit + 1, total)}–{Math.min(page * limit, total)} of {total}
            </span>

            <button
              onClick={() => {
                setPage(prev => {
                  const next = Math.max(1, prev - 1);
                  if (next !== prev) {
                    blogCardsRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }
                  return next;
                });
              }}
              disabled={page === 1}
              className="px-2 py-1 rounded hover:bg-gray-700 disabled:opacity-50"
            >
              &#x276E;
            </button>

            <button
              onClick={() => {
                setPage(prev => {
                  const next = prev + 1;
                  if (next !== prev) {
                    blogCardsRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }
                  return next;
                });
              }}
              disabled={page * limit >= total}
              className="px-2 py-1 rounded hover:bg-gray-700 disabled:opacity-50"
            >
              &#x276F;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}




