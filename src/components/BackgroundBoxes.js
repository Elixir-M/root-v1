"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { FlipWords } from "./ui/flip-words";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";



export function BackgroundBoxesDemo() {
    const words = ["better", "cute", "beautiful", "modern"];
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-300" />
          ),
          href: "#",
        },

        {
          title: "Products",
          icon: (
            <IconTerminal2 className="h-full w-full text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Components",
          icon: (
            <IconNewSection className="h-full w-full text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "Aceternity UI",
          icon: (
            <Image
              src="https://assets.aceternity.com/logo-dark.png"
              width={20}
              height={20}
              alt="Aceternity Logo"
            />
          ),
          href: "#",
        },
        {
          title: "Changelog",
          icon: (
            <IconExchange className="h-full w-full text-neutral-300" />
          ),
          href: "#",
        },

        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-300" />
          ),
          href: "#",
        },
    ]

  return (
    (<div
      className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-400">
        Build
        <FlipWords words={words} duration={500} /> <br />
        websites with Aceternity UI
      </div>
      <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
    </div>




    </div>)
  );
}
