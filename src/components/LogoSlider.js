'use client';
import React, { useState, useEffect } from 'react';
import { 
  MonitorPlay, 
  Search, 
  FacebookIcon,
  ShoppingCart 
} from 'lucide-react';

const LogoSlider = () => {
  const logos = [
    {
      id: 1,
      name: "Streaming",
      Icon: MonitorPlay,
      color: "#E50914"
    },
    {
      id: 2,
      name: "Search",
      Icon: Search,
      color: "#4285F4"
    },
    {
      id: 3,
      name: "Social",
      Icon: FacebookIcon,
      color: "#0668E1"
    },
    {
      id: 4,
      name: "Shopping",
      Icon: ShoppingCart,
      color: "#FF9900"
    }
  ];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    // Increased speed
    const speed = 1.2;
    const interval = setInterval(() => {
      setPosition(prev => {
        return prev <= -2000 ? 0 : prev - speed;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const allLogos = Array(50).fill(logos).flat();

  return (
    <div className="overflow-hidden bg-black relative">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="relative mx-auto py-12">
        <div 
          className="flex transition-transform duration-75 ease-linear"
          style={{
            transform: `translateX(${position}px)`,
            width: 'fit-content'
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 px-16 w-80" // Increased spacing
            >
              <div className="flex items-center justify-center">
                <logo.Icon
                  size={64}
                  className="transition-colors duration-300 ease-in-out"
                  style={{
                    color: '#6B7280',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = logo.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6B7280';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;