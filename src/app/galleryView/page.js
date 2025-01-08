import React from "react";

const galleryView = (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
    {cards.map((card) => (
      <div 
        key={card.id} 
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative group"
      >
        <div className="relative h-48">
          <img
            src={card.imageUrl}
            alt="Card image"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => handleDeleteCard(card.id)}
            className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="p-4 flex-grow">
          <p className="text-gray-700 break-words">{card.text}</p>
        </div>
      </div>
    ))}

    {cards.length === 0 && (
      <div className="col-span-full text-center text-gray-500 mt-12">
        No cards yet. Create your first card!
      </div>
    )}
  </div>
);