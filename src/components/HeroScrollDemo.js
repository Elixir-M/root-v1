"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden mt-10">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              {/* Unleash the power of  */}
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        } >
        <Image
          src="https://imgs.search.brave.com/CqtInyQsq5rDUFct1LEuwfHvaSDVeVtUjrdVtN1WfZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9teXFy/Y29kZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDQv/MTF6b25fUVItY29k/ZS1mb3ItYW55LWlt/YWdlLW9yLXBob3Rv/LW9uLXRoZS13ZWIt/MTAyNHg3NTUud2Vi/cA"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
