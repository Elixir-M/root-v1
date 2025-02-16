"use client";
import React, { useState, useEffect } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem, MenuItemsList } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';

export function Navbar({ className }) {
    const [active, setActive] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileItems, setExpandedMobileItems] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        const handleResize = () => {
            if (window.innerWidth >= 1020) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuItemClick = (item) => {
        if (active === item) {
            setActive(null);
            setIsMenuOpen(false);
        } else {
            setActive(item);
            setIsMenuOpen(true);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setExpandedMobileItems(null);
    };

    const toggleMobileItem = (title) => {
        console.log('Toggling item:', title);
        setExpandedMobileItems(expandedMobileItems === title ? null : title);
    };

    const menuItems = [
        {
            title: "Our Company",
            items: [
                { href: "/test", text: "Who We Are" },
                { href: "/test", text: "About us" },
                { href: "/test", text: "Company Overview" },
                { href: "/test", text: "Our Story" },
                { href: "/test", text: "Get to Know Us" },
                { href: "/test", text: "Our Business Model" },
                { href: "/test", text: "How We Work" },
                { href: "/test", text: "Our Approach" },

            ]
        },
        {
            title: "Services",
            items: [
                { href: "/Services/blockChain", text: "Blockchain Solutions"},
                { href: "/Services/mobdev", text: "Mobile App Development"},
                { href: "/Services/webdev", text: "Web Development"},
                { href: "/Services/appdev", text: "Application Development"},
                { href: "/Services/aiml", text: "AI & Machine learning"},
                { href: "/test", text: "Internet of Thing"},
                { href: "/test", text: "Graphic Design"},
                { href: "/test", text: "Quality Assurance & Testing"},
                { href: "/test", text: "Game Development"},
                { href: "/test", text: "Supply Chain Solutions"},
                { href: "/test", text: "Cybersecurity Services"},
                { href: "/test", text: "Digital Marketing & Branding"},
                { href: "/Services/cloudsolutions", text: "Cloud Solutions"},
                { href: "/Services/systemintegration", text: "System Integration Services"},
            ]
        },
        {
            title: "Innovations & Solutions",
            items: [
                {
                    type: "product",
                    products: [
                        {
                            title: "Algochurn",
                            href: "https://algochurn.com",
                            src: "https://assets.aceternity.com/demos/algochurn.webp",
                            description: "Prepare for tech interviews like never before."
                        },
                        {
                            title: "Tailwind Master Kit",
                            href: "https://tailwindmasterkit.com",
                            src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
                            description: "Production ready Tailwind css components."
                        },
                        {
                            title: "Moonbeam",
                            href: "https://gomoonbeam.com",
                            src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
                            description: "Never write from scratch again."
                        },
                        {
                            title: "Rogue",
                            href: "https://userogue.com",
                            src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png",
                            description: "Respond to RFPs, RFIs and RFQs 10x faster."
                        }
                    ]
                },
                {
                    type: "more",
                    href: "/projects",
                    text: "View All Projects →"
                }
            ]
        },
        {
            title: "Hire Experts",
            items: [
                { href: "/test", text: "Hobby" },
                { href: "/test", text: "Individual" },
                { href: "/test", text: "Team" },
                { href: "/test", text: "Enterprise" },
            ]
        }
    ];

    return (
        <div className={cn(
            "fixed top-6 w-full flex justify-center px-6 z-50 transition-all duration-700",
            className
        )}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={cn(
                    "w-[80%] transition-all duration-700",
                    isScrolled
                        ? "flex items-center justify-center"
                        : "flex items-center justify-between"
                )}
            >
                <motion.div
                    initial={false}
                    animate={{
                        scale: 1,
                    }}
                    className={cn(
                        "flex items-center justify-between w-full lg:w-auto transition-all duration-700",
                        isScrolled ? "gap-8" : "gap-16"
                    )}
                >
                    <div className={cn(
                        "flex items-center",
                        isMobileMenuOpen ? "hidden lg:flex" : "flex",
                        isScrolled ? "lg:hidden" : ""
                    )}>
                        <Link href="/">
                            <img
                                src="/assets/img/Logo.png"
                                alt="Logo"
                                className="h-10 w-auto pb-2 cursor-pointer"
                            />
                        </Link>
                    </div>

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
                            "hidden lg:flex items-center transition-all duration-700 navbar-menu",
                            isScrolled
                                ? "rounded-full border border-white/[0.2] bg-black/80 backdrop-blur-sm shadow-lg px-8 py-3"
                                : "border-none bg-transparent px-4 py-3"
                        )}
                    >
                        {isScrolled && (
                            <div className="hidden lg:flex items-center mr-8">
                                <Link href="/">
                                    <img
                                        src="/assets/img/Logo.png"
                                        alt="Logo"
                                        className="h-10 w-auto pb-2 cursor-pointer"
                                    />
                                </Link>
                            </div>
                        )}

                        <Menu setActive={setActive}>
                            <div className={cn(
                                "flex items-center transition-all duration-700",
                                isScrolled ? "gap-8" : "gap-12"
                            )}>
                                {menuItems.map((menuItem) => (
                                    <MenuItem
                                        key={menuItem.title}
                                        setActive={setActive}
                                        active={active}
                                        item={menuItem.title}
                                        onClick={() => handleMenuItemClick(menuItem.title)}
                                        isOpen={isMenuOpen}
                                    >
                                        {menuItem.items[0].type === "product" ? (
                                            <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                                {menuItem.items[0].products.map((product) => (
                                                    <ProductItem
                                                        key={product.title}
                                                        {...product}
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <MenuItemsList items={menuItem.items} />
                                        )}
                                    </MenuItem>
                                ))}
                            </div>
                        </Menu>

                        {isScrolled && (
                            <Link href="/blogs">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="ml-8 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-200"
                            >
                                Blogs
                            </motion.button>
                            </Link>
                        )}
                    </motion.div>

                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className={cn(
                                "p-2 rounded-full transition-colors duration-200",
                                isScrolled
                                    ? "text-white hover:bg-white/20"
                                    : "text-white hover:bg-black/20"
                            )}
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <MenuIcon size={24} />
                            )}
                        </button>
                    </div>
                </motion.div>

                {isMobileMenuOpen && (
                    <div className="fixed inset-x-0 top-24 px-6 lg:hidden">
                        <div className="bg-black/80 backdrop-blur-sm border border-white/[0.2] rounded-2xl shadow-xl p-4">
                            <div className="flex justify-center mb-4 border-b border-white/10 pb-4">
                                <Link href="/">
                                    <img 
                                        src="/assets/img/Logo.png"  
                                        alt="Logo"
                                        className="h-10 w-auto pb-2 cursor-pointer"
                                    />
                                </Link>
                            </div>
                            
                            <nav className="flex flex-col space-y-2">
                                {menuItems.map((menuItem) => (
                                    <div key={menuItem.title} className="border-b border-white/10 last:border-none">
                                        <button
                                            onClick={() => toggleMobileItem(menuItem.title)}
                                            className="flex items-center justify-between w-full py-3 text-white"
                                        >
                                            <span>{menuItem.title}</span>
                                            <ChevronDown 
                                                size={16} 
                                                className={`transform transition-transform ${
                                                    expandedMobileItems === menuItem.title ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>
                                        
                                        <div className={`overflow-hidden transition-all duration-300 ${
                                            expandedMobileItems === menuItem.title ? 'max-h-96 pb-3' : 'max-h-0'
                                        }`}>
                                            <div className="pl-4 flex flex-col space-y-2">
                                                {menuItem.items[0]?.type === "product" ? (
                                                    <>
                                                        {menuItem.items[0].products.map((product) => (
                                                            <Link 
                                                                key={product.title}
                                                                href={product.href}
                                                                className="text-gray-300 hover:text-white py-1"
                                                            >
                                                                {product.title}
                                                            </Link>
                                                        ))}
                                                        <Link 
                                                            href="/portfolio"
                                                            className="mt-4 text-center bg-white/10 hover:bg-white/20 text-white py-2 rounded-full text-sm transition-colors duration-200"
                                                        >
                                                            View All Projects →
                                                        </Link>
                                                    </>
                                                ) : (
                                                    menuItem.items.map((item) => (
                                                        <Link 
                                                            key={item.href}
                                                            href={item.href}
                                                            className="text-gray-300 hover:text-white py-1"
                                                        >
                                                            {item.text}
                                                        </Link>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </nav>
                            <Link href="/blogs">
                            <button className="w-full mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                                Blogs
                            </button>
                            </Link>
                            
                        </div>
                    </div>
                )}

                {!isScrolled && !isMobileMenuOpen && (
                    <Link href="/blogs">
                    <motion.button
                        initial={false}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hidden lg:block px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-200"
                    >
                        Blogs
                    </motion.button>
                    </Link>
                )}
            </motion.div>
        </div>
    );
}
