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
'use client';

import { useState, useEffect } from 'react';

export default function PublicCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error('Error fetching cards:', err));
  }, []);
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Cards Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="border rounded p-4">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }