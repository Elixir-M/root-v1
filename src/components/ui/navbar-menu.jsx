
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItemsList = ({ items }) => {
  const itemCount = items.length;
  const shouldUseColumns = itemCount > 7;
  const maxTextLength = Math.max(...items.map(item => item.text.length));
  
  const getWidthClass = () => {
    if (shouldUseColumns) return 'min-w-[24rem]';
    if (maxTextLength <= 12) return 'min-w-[8rem]';
    if (maxTextLength <= 20) return 'min-w-[12rem]';
    return 'min-w-[16rem]';
  };

  if (!shouldUseColumns) {
    return (
      <div className={`flex flex-col space-y-2 ${getWidthClass()}`}>
        {items.map((item) => (
          <HoveredLink key={item.href} href={item.href}>
            {item.text}
          </HoveredLink>
        ))}
      </div>
    );
  }

  const itemsPerColumn = Math.ceil(itemCount / 2);
  const firstColumn = items.slice(0, itemsPerColumn);
  const secondColumn = items.slice(itemsPerColumn);

  return (
    <div className={`grid grid-cols-2 gap-x-8 ${getWidthClass()}`}>
      <div className="flex flex-col space-y-2">
        {firstColumn.map((item) => (
          <HoveredLink key={item.href} href={item.href}>
            {item.text}
          </HoveredLink>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        {secondColumn.map((item) => (
          <HoveredLink key={item.href} href={item.href}>
            {item.text}
          </HoveredLink>
        ))}
      </div>
    </div>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
  isOpen
}) => {
  return (
    <div className="relative group">
      <motion.div
        onClick={onClick}
        className={`cursor-pointer text-white px-4 py-2 rounded-full 
          transition-all duration-200 ease-in-out
          hover:bg-gray-700/50 hover:text-gray-400
          ${active === item ? 'bg-gray-700/50' : ''}
          inline-flex items-center gap-1`}>
        <span>{item}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 opacity-60 translate-y-[1px]
            ${active === item ? 'rotate-180' : 'rotate-0'}`}
        />
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl">
                <motion.div layout className="w-max h-full p-6">
                  {React.Children.map(children, child => {
                    if (React.isValidElement(child) && child.props.className?.includes('text-sm grid grid-cols-2')) {
                      return (
                        <div className="flex flex-col">
                          {child}
                          <div className="flex justify-center mt-6">
                            <Link 
                              href="/portfolio"
                              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm transition-colors duration-200"
                            >
                              View All Projects →
                            </Link>
                          </div>
                        </div>
                      );
                    }
                    return child;
                  })}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('nav')) {
        setActive(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setActive]);

  return (
    <nav className="flex items-center space-x-4">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <Link href={href} className="flex space-x-2 group">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white hover:text-gray-400 transition-colors duration-200">
          {title}
        </h4>
        <p className="text-white text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className="text-white transition-colors duration-200 hover:text-gray-400 py-1 px-2">
      {children}
    </Link>
  );
};


