// "use client";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";

// export const Card = React.memo(({ card, index, hovered, setHovered }) => (
//   <div
//     onMouseEnter={() => setHovered(index)}
//     onMouseLeave={() => setHovered(null)}
//     className={cn(
//       "relative bg-gray-100 dark:bg-neutral-900 rounded-xl border-2 border-violet-900  overflow-hidden aspect-[3/2] w-full max-w-[380px] mx-auto transition-all duration-300 ease-out shadow-lg hover:shadow-xl ",
//       hovered !== null &&
//         hovered !== index &&
//         "blur-sm scale-[0.98] brightness-90"
//     )}
//   >
//     <div
//       className={cn(
//         "absolute inset-0 flex items-center justify-center text-md font-semibold text-gray-800 dark:text-gray-200 transition-opacity duration-500 text-center p-4",
//         hovered === index ? "opacity-0" : "opacity-100"
//       )}
//     >
//       {card.original}
//     </div>
//     <div
//       className={cn(
//         "absolute inset-0 flex items-center justify-center text-md font-bold text-white bg-black/60 transition-opacity duration-500 text-center p-4",
//         hovered === index ? "opacity-100" : "opacity-0"
//       )}
//     >
//       {card.replacement}
//     </div>
//   </div>
// ));

// Card.displayName = "Card";

// export function FocusCards({ cards }) {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-[95%] mx-auto px-4 py-4">
//       {cards.map((card, index) => (
//         <Card
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered}
//         />
//       ))}
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "relative bg-gray-100 dark:bg-neutral-900 rounded-xl border-2 border-violet-900 overflow-hidden transition-all duration-300 ease-out shadow-lg hover:shadow-xl h-32",
      hovered !== null &&
        hovered !== index &&
        "blur-sm scale-[0.98] brightness-90"
    )}
  >
    <div className="absolute inset-0 p-3 flex items-center justify-center">
      <p className={cn(
        "text-center transition-opacity duration-300 text-xs sm:text-sm",
        hovered === index ? "opacity-0" : "opacity-100"
      )}>
        {card.original}
      </p>
    </div>
    <div className="absolute inset-0 p-3 flex items-center justify-center">
      <p className={cn(
        "text-center transition-opacity duration-300 text-xs sm:text-sm",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
        {card.replacement}
      </p>
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
