// app/cards/page.js
// async function getCards() {
//      // Get the base URL from environment or use a default
//   const baseUrl = process.env.VERCEL_URL 
//   ? `https://${process.env.VERCEL_URL}`
//   : process.env.NODE_ENV === 'development' 
//     ? 'http://localhost:3000' 
//     : '';

// const response = await fetch(`${baseUrl}/api/cards`, {
//   cache: 'no-store',
//   // Add these headers for server-side fetching
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// return response.json();
// }
  
//   export default async function PublicCards() {
//     const cards = await getCards();




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
//   console.log("cards",cards);
  
//     return (
//       <div className="container mx-auto px-4 py-8">
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {cards.map((card) => (
//             <div key={card.id} className="border rounded p-4">
//               <img
//                 src={card.imageUrl}
//                 alt={card.title}
//                 className="w-full h-48 object-cover mb-4"
//               />
//               <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//               <p>{card.description}</p>
//               <a href={`/${card.pageName}`}>Click More</a>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }


'use client';

import { useState, useEffect } from 'react';

export default function BlogCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => setCards(data.data))
      .catch(err => console.error('Error fetching cards:', err));
  }, []);
  
  return (
    <div className="relative bg-black py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article key={card.id} className="flex flex-col group border border-white/20 rounded-2xl p-4">
              <a href={`/${card.pageName}`} className="w-full">
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
                
                <a 
                  href={`/${card.pageName}`} 
                  className="inline-flex items-center mt-2"
                >
                  <span className="text-base font-semibold text-white relative">
                    <span className="relative">
                      Read Now
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </span>
                  <svg 
                    className="w-3 h-3 ml-2 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}