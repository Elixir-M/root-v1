"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "relative bg-gray-100 dark:bg-neutral-900 rounded-xl border-2 border-violet-900 overflow-hidden transition-all duration-300 ease-out shadow-lg hover:shadow-xl h-32"
    )}
  >
    {/* Always visible text container */}
    <div
      className={cn(
        "absolute inset-0 p-3 flex items-center justify-center transition-opacity duration-300",
        hovered === index ? "opacity-0" : "opacity-100"
      )}
    >
      <p className="text-center text-xs sm:text-sm">{card.original}</p>
    </div>

    {/* Replacement text that fades in */}
    <div
      className={cn(
        "absolute inset-0 p-3 flex items-center justify-center transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <p className="text-center text-xs sm:text-sm">{card.replacement}</p>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
