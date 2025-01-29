// 3DCardEffect.js
"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCard({
  imgSrc,
  title,
  description,
  tryNowLink
}) {
  return (
    <div className="w-full lg:w-1/4 md:w-1/2 sm:w-full px-3 mb-6">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white mb-4"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-base max-w-sm mb-6 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full">
            <div className="aspect-[16/9] relative w-full overflow-hidden rounded-xl">
              <Image
                src={imgSrc}
                layout="fill"
                objectFit="cover"
                className="group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href={tryNowLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-sm font-medium dark:text-white hover:opacity-80 transition-opacity"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold hover:opacity-80 transition-opacity"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

// Container component for the grid
export function ThreeDCardGrid({ children }) {
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

export default ThreeDCard;