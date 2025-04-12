
// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import { IconX, IconExternalLink } from "@tabler/icons-react";
// import Link from "next/link";

// export function ThreeDCard({
//   imgSrc,
//   title,
//   description,
//   tryNowLink,
//   modalContent = {
//     description: "Detailed feature description goes here",
//     features: ["Feature 1", "Feature 2", "Feature 3"],
//     expandedImage: "",  // New prop for modal image
//     deployedLink: ""    // New prop for deployed site link
//   }
// }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') setIsModalOpen(false);
//     };

//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//       window.addEventListener('keydown', handleEscape);
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       window.removeEventListener('keydown', handleEscape);
//     };
//   }, [isModalOpen]);

//   const handleClickOutside = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       setIsModalOpen(false);
//     }
//   };

//   return (
//     <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full px-3 mb-6">
//       <CardContainer className="inter-var">
//         <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
//           <CardItem
//             translateZ="50"
//             className="text-2xl font-bold text-neutral-600 dark:text-white mb-4"
//           >
//             {title}
//           </CardItem>
//           <CardItem
//             as="p"
//             translateZ="60"
//             className="text-neutral-500 text-base max-w-sm mb-6 dark:text-neutral-300"
//           >
//             {description}
//           </CardItem>
//           <CardItem translateZ="100" className="w-full">
//             <div className="aspect-[16/9] relative w-full overflow-hidden rounded-xl">
//               <Image
//                 src={imgSrc}
//                 layout="fill"
//                 objectFit="cover"
//                 className="group-hover/card:shadow-xl"
//                 alt="thumbnail"
//               />
//             </div>
//           </CardItem>
//           <div className="flex justify-center items-center mt-8">
//             {/* <CardItem
//               translateZ={20}
//               as={Link}
//               href={tryNowLink}
//               target="__blank"
//               className="px-4 py-2 rounded-xl text-sm font-medium dark:text-white hover:opacity-80 transition-opacity"
//             >
//               Try now →
//             </CardItem> */}
//             <CardItem
//               translateZ={20}
//               as="button"
//               onClick={() => setIsModalOpen(true)}
//               className="px-4 py-2 rounded-xl bg-black dark:bg-gray-700 dark:text-white text-white text-sm font-bold hover:opacity-80 transition-opacity"
//             >
//               Read More
//             </CardItem>
//           </div>
//         </CardBody>
//       </CardContainer>

//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 h-screen z-50 overflow-auto" onClick={handleClickOutside}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
//             />
//             <motion.div
//               ref={modalRef}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ type: "spring", duration: 0.5 }}
//               className="max-w-5xl mx-auto bg-neutral-900 h-fit z-[60] my-28 p-4 md:p-10 rounded-3xl font-sans relative"
//             >
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-4 right-4 h-8 w-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
//               >
//                 <IconX className="h-6 w-6 text-neutral-900" />
//               </button>

//               <div className="mt-8">
//                 {/* <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
//                   <Image
//                     src={modalContent.expandedImage || imgSrc}
//                     alt={title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-500 hover:scale-105"
//                   />
//                 </div> */}

//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-3xl font-bold text-white">{title}</h2>
//                   {modalContent.deployedLink && (
//                     <Link 
//                       href={modalContent.deployedLink}
//                       target="_blank"
//                       className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
//                     >
//                       <span>View Project</span>
//                       <IconExternalLink className="w-5 h-5" />
//                     </Link>
//                   )}
//                 </div>
//                 <p className="text-lg text-white/80 mb-8">{modalContent.description}</p>
                
//                 <div className="space-y-4">
//                   {modalContent.features.map((feature, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <div className="h-2 w-2 bg-emerald-500 rounded-full" />
//                       <p className="text-white/70">{feature}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* <div className="mt-12 flex justify-end">
//                   <button 
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
//                   >
//                     Get Started
//                   </button>
//                 </div> */}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


// Container component for the grid
// export function ThreeDCardGrid({ children }) {
//   return (
//     <div className="w-full py-12">
//       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
//         <div className="flex flex-wrap -mx-3">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ThreeDCard;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"; // Adjust as per your actual path
import { IconExternalLink } from "@tabler/icons-react"; // If needed
import Link from "next/link";
import { motion } from "framer-motion";

export function TechStackCard({
  imgSrc,
  techName,
  description,
  techLink,
  features = [], // Optional array of features for Read More
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full lg:w-1/4 md:w-1/2 sm:w-full px-3 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`bg-slate-950 dark:bg-slate-800 border border-neutral-800 rounded-xl p-6 transition-all duration-300 ease-in-out flex flex-col h-full ${
          isHovered ? "shadow-lg shadow-emerald-500" : ""
        }`}
      >
        <CardContainer className="inter-var flex-grow">
          <CardBody className="relative flex flex-col flex-grow">
            <CardItem className="text-2xl font-bold text-white mb-4">{techName}</CardItem>
            {/* Image */}
            <div className="aspect-[16/9] relative w-full overflow-hidden rounded-xl mb-4">
              <Image
                src={imgSrc}
                layout="fill"
                objectFit="cover"
                alt={techName}
                className="rounded-xl transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
            </div>
            <CardItem as="p" className="text-neutral-400 text-base mb-6 flex-grow">
              {description}
            </CardItem>

            

            {/* Features list (display bullet points directly in card) */}
            {features.length > 0 && (
              <div className="space-y-2 mb-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-neutral-300">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full" />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            )}
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
}

export function TechStackGrid({ children }) {
  return (
    <div className="w-full py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-wrap -mx-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default TechStackCard;
