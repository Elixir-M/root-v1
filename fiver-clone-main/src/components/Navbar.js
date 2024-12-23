// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";


// export function Navbar({ className }) {
//     const [active, setActive] = useState(null);
//     return (
//       <div
//         className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//       >
//         <Menu setActive={setActive}>
//           <MenuItem setActive={setActive} active={active} item="Services">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/web-dev">Web Development</HoveredLink>
//               <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//               <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//               <HoveredLink href="/branding">Branding</HoveredLink>
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Products">
//             <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//               <ProductItem
//                 title="Algochurn"
//                 href="https://algochurn.com"
//                 src="https://assets.aceternity.com/demos/algochurn.webp"
//                 description="Prepare for tech interviews like never before."
//               />
//               <ProductItem
//                 title="Tailwind Master Kit"
//                 href="https://tailwindmasterkit.com"
//                 src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//                 description="Production ready Tailwind css components for your next project"
//               />
//               <ProductItem
//                 title="Moonbeam"
//                 href="https://gomoonbeam.com"
//                 src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//                 description="Never write from scratch again. Go from idea to blog in minutes."
//               />
//               <ProductItem
//                 title="Rogue"
//                 href="https://userogue.com"
//                 src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//                 description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//               />
//             </div>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="Pricing">
//             <div className="flex flex-col space-y-4 text-sm">
//               <HoveredLink href="/hobby">Hobby</HoveredLink>
//               <HoveredLink href="/individual">Individual</HoveredLink>
//               <HoveredLink href="/team">Team</HoveredLink>
//               <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//             </div>
//           </MenuItem>
//         </Menu>
//       </div>
//     );
//   }




"use client";
import React, { useState, useEffect } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar({ className }) {
    const [active, setActive] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
                "fixed top-6 z-50 transition-all duration-700",
                isScrolled ? "left-1/2 -translate-x-1/2 w-[40rem]" : "left-1/2 -translate-x-1/2 w-[32rem]",
                className
            )}
        >
            <motion.div
                initial={false}
                animate={{ 
                    scale: isScrolled ? 1.05 : 1,
                }}
                transition={{ 
                    duration: 0.8,
                    ease: [0.19, 1, 0.22, 1],
                }}
                className={cn(
                    "flex justify-center w-full transition-all duration-700",
                    isScrolled 
                        ? "rounded-full border border-white/[0.2] bg-black/80 backdrop-blur-sm shadow-lg px-8 py-3" 
                        : "border-none bg-transparent px-4 py-3"
                )}
            >
                <Menu setActive={setActive}>
                    <div className={cn(
                        "flex items-center justify-center transition-all duration-700",
                        isScrolled ? "gap-10" : "gap-16"
                    )}>
                        <MenuItem setActive={setActive} active={active} item="Services">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                <HoveredLink href="/branding">Branding</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Products">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                              <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Prepare for tech interviews like never before."
                              />
                              <ProductItem
                                title="Tailwind Master Kit"
                                href="https://tailwindmasterkit.com"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Production ready Tailwind css components for your next project"
                              />
                              <ProductItem
                                title="Moonbeam"
                                href="https://gomoonbeam.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                              />
                              <ProductItem
                                title="Rogue"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                              />
                            </div>
                        </MenuItem>
                        
                        <MenuItem setActive={setActive} active={active} item="Pricing">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/hobby">Hobby</HoveredLink>
                                <HoveredLink href="/individual">Individual</HoveredLink>
                                <HoveredLink href="/team">Team</HoveredLink>
                                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                            </div>
                        </MenuItem>
                    </div>
                </Menu>
            </motion.div>
        </motion.div>
    );
}