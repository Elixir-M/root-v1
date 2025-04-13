"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div>
      {" "}
      <h2 className="text-center text-balance text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white mt-[10vh]">
        Code that goes a long way..
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 w-full mx-auto px-2 lg:px-8 mb-8 mt-[10vh]">
        {/* Main content - Takes roughly 70% width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-[70%]">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[220px] lg:min-h-[180px]"
            className="relative"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 w-full">
              <div className="lg:w-1/2 z-10">
                <h2 className="text-left text-balance text-lg lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-2 lg:mt-4 text-left text-sm lg:text-base text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end mt-2 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="linear demo image"
                  className="object-contain rounded-2xl w-full h-[120px] lg:h-auto max-w-[200px] lg:max-w-full"
                />
              </div>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[180px]">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              If someone yells "stop!", goes limp, or taps out, the fight is
              over.
              <br />
              <a
                href="https://jamesclear.com/articles"
                className="text-blue-400 hover:text-blue-300 hover:underline"
              >
                Read More
              </a>
            </p>
          </WobbleCard>

          <WobbleCard
            containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px] lg:min-h-[180px]"
            className="relative"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full">
              <div className="lg:w-1/2 z-10">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for blazing-fast cutting-edge state of the art Gippity
                  AI wrapper today!
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="linear demo image"
                  className="object-contain rounded-2xl w-full max-w-[280px] lg:max-w-full"
                />
              </div>
            </div>
          </WobbleCard>
        </div>

        {/* Vertical section - Takes roughly 30% width */}
        <WobbleCard containerClassName="w-full lg:flex-1 min-h-[250px] lg:min-h-[580px] bg-indigo-900">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-left text-balance text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                Vertical Showcase
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                This tall card shows important information that spans the full
                height.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="vertical card image"
              className="object-contain rounded-2xl mx-auto my-8 lg:my-0 max-w-[280px] lg:max-w-[90%] w-full"
            />
            <div className="mt-4">
              <p className="text-left text-base/6 text-neutral-200">
                Bottom section content with additional details or calls to
                action.
              </p>
              <button className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
