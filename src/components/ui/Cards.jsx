"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load cards from localStorage on component mount
    const savedCards = JSON.parse(localStorage.getItem('cards') || '[]');
    setCards(savedCards);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Cards Gallery</h1>
          <Link href="/new-card" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Add New Card
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <img
                  src={card.imageUrl}
                  alt="Card image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <p className="text-gray-700 break-words">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {cards.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            No cards yet. Add your first card!
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;