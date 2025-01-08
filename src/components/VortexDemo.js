import React from "react";
import { Vortex } from "./ui/vortex";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


export function VortexDemo() {
    const words = [
        {
          text: "Build ",
        },
        {
          text: "awesome ",
        },
        {
          text: "apps ",
        },
        {
          text: "with ",
        },
        {
          text: "Elixir.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    (<div
      className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
            <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm">
          Join now
        </button> */}
        <a 
        href="/contact" 
        className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm flex justify-center items-center hover:bg-white hover:text-black"
        >
          Contact Us
        </a>
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
      </div>
    </div>

      </Vortex>
    </div>)
  );
}
