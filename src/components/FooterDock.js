"use client";
import React, { useState } from "react";
import { Home, PenLine, Github, Linkedin, Twitter, Mail, Sun } from "lucide-react";

const NavItem = ({ icon: Icon, label, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative transition-all duration-200 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs sm:text-sm px-2 py-1 rounded-md whitespace-nowrap">
          {label}
        </div>
      )}
      <div className="p-1 sm:p-2 transition-all duration-200 rounded-full hover:bg-white/10">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
      </div>
    </a>
  );
};

const FooterDock = () => {
  const navItems = [
    { icon: Home, label: "Home", url: "https://www.example.com/home" },
    { icon: PenLine, label: "Blog", url: "https://www.example.com/blog" },
    { icon: Github, label: "Github", url: "https://github.com/" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/" },
    { icon: Mail, label: "Contact", url: "mailto:contact@example.com" },
    { icon: Sun, label: "Theme", url: "https://www.example.com/theme" },
  ];

  return (
    <div className="w-full flex justify-center p-4">
      <div className="bg-black/5 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-3 md:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} label={item.label} href={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterDock;
