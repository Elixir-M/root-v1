"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col mt-10">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl font-semibold text-white">
              {/* Unleash the power of  */}
              <br />
              <br />
              <br />
              <br />
              <br />
              <span className="text-3xl md:text-[4.5rem] font-bold mt-1 leading-none">
              Code the Future, Build with Confidence
              </span>
              <br />
              <br />
            </h1>
          </>
        }
      >
        <Image
          src="/assets/img/resolution.png"
          alt="hero"
          height={1000}
          width={1400}
          className="mx-auto rounded-2xl object-cover w-full h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
