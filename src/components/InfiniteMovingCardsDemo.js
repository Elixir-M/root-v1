import React from 'react';
import './InfiniteMovingCardsDemo.css';

const cards = [
  {
    text: 'AI-driven insights, chatbots, and predictive analytics.',
    icon: '🤖',
    source: "",
    author:'Artificial Intelligence & Automation'
  },
  {
    text: ' Secure, transparent, and tamper-proof digital solutions.',
    icon: '🔗',
    source: "",
    author:'Blockchain & Decentralized Applications'
  },
  {
    text: ' Robust platforms for seamless business operations.',
    icon: '💻',
    source: "",
    author:'Enterprise Software & Cloud Solutions'
  },
  {
    text: ' Intelligent systems for connected industries.',
    icon: '📱',
    source: "",
    author:'IoT & Smart Technologies '
  },
  {
    text: ' Real-time data insights for smarter decision-making.',
    icon: '📊',
    author: 'Big Data & Analytics',
    source: ""
  },
  {
    text: 'Advanced security frameworks for digital protection.',
    icon: '🔒',
    source: "",
    author: 'Cybersecurity & Compliance'
  }
];

const InfiniteMovingCards = () => {
  return (
    <div className="infinite-cards-container">
      <div className="cards-track">
        {[...cards, ...cards].map((card, index) => (
          <div className="card" key={index}>
            <div className="text-4xl mb-4">{card.icon}</div>
            <p className="card-text">{card.text}</p>
            <span className="card-author">{card.author}</span>
            <small className="card-source">{card.source}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;

// // components/InfiniteMovingCards.js
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';

// const cards = [
//   {
//     text: 'Artificial Intelligence & Automation – AI-driven insights, chatbots, and predictive analytics.',
//     icon: '🤖'
//   },
//   {
//     text: 'Blockchain & Decentralized Applications – Secure, transparent, and tamper-proof digital solutions.',
//     icon: '🔗'
//   },
//   {
//     text: 'Enterprise Software & Cloud Solutions – Robust platforms for seamless business operations.',
//     icon: '💻'
//   },
//   {
//     text: 'IoT & Smart Technologies – Intelligent systems for connected industries.',
//     icon: '📱'
//   },
//   {
//     text: 'Big Data & Analytics – Real-time data insights for smarter decision-making.',
//     icon: '📊'
//   },
//   {
//     text: 'Cybersecurity & Compliance – Advanced security frameworks for digital protection.',
//     icon: '🔒'
//   }
// ];

// const InfiniteMovingCards = () => {
//   const [duplicatedCards, setDuplicatedCards] = useState([]);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Duplicate cards to ensure continuous scrolling
//     setDuplicatedCards([...cards, ...cards, ...cards]);
    
//     // Handle animation restart
//     const handleAnimationEnd = () => {
//       if (containerRef.current) {
//         containerRef.current.style.transition = 'none';
//         containerRef.current.style.transform = 'translateX(0)';
//         // Force reflow
//         containerRef.current.offsetHeight;
//         containerRef.current.style.transition = 'transform 20s linear infinite';
//         containerRef.current.style.transform = 'translateX(-50%)';
//       }
//     };
    
//     // Add event listener
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('transitionend', handleAnimationEnd);
//     }
    
//     // Start the animation
//     setTimeout(() => {
//       if (containerRef.current) {
//         containerRef.current.style.transition = 'transform 20s linear infinite';
//         containerRef.current.style.transform = 'translateX(-50%)';
//       }
//     }, 0);
    
//     return () => {
//       if (container) {
//         container.removeEventListener('transitionend', handleAnimationEnd);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full overflow-hidden bg-gray-100 py-12">
//       <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="overflow-hidden">
//           <div
//             ref={containerRef}
//             className="flex gap-6"
//             style={{ width: 'fit-content' }}
//           >
//             {duplicatedCards.map((card, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-72 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
//               >
//                 <div className="text-4xl mb-4">{card.icon}</div>
//                 <p className="text-gray-800 text-lg">{card.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfiniteMovingCards;
