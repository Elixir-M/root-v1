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
                Future-Ready Teams. Future-Proof Tech.
                </h2>
                <p className="mt-2 lg:mt-4 text-left text-sm lg:text-base text-neutral-200">
                <b>Tech talent that just gets it.</b> Whether it's blockchain with Solidity or full-stack builds in React and AI/ML, we bring the expertise to you.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end mt-2 lg:mt-0">
                <img
                  src="https://www.mindinventory.com/blog/wp-content/uploads/2023/06/blockchain-trends.webp"
                  alt="development trends"
                  className="object-contain rounded-2xl w-full h-[120px] lg:h-auto max-w-[200px] lg:max-w-full"
                />
              </div>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[180px]">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            From Hype to Reality: AI & ML Made Simple
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            <b>Cut through the noise of Generative AI.</b> We build smarter, scalable solutions using TensorFlow, PyTorch, and custom ML models tailored to your business.
              <br />
              
            </p>
          </WobbleCard>

          <WobbleCard
            containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[300px] lg:min-h-[180px]"
            className="relative"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full">
              <div className="lg:w-1/2 z-10">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Immersive Web Experiences in 3D
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                <b>Futuristic design, seamless performance.</b> We craft stunning 3D websites with Three.js, React Three Fiber, and Next.js—bringing your ideas to life.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="https://cdn.iconscout.com/wordpress/2021/11/Cover--Inspiring-Web-Design-Concepts-with-3D-Graphics-1.png"
                  alt="3D trends"
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
              Build, Scale & Protect with Confidence
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
              <b>Modern infrastructure, fortified security.</b> 
              </p>
            </div>
            <img
              src="https://eu-images.contentstack.com/v3/assets/blt07f68461ccd75245/bltd5624bcfcfb6295c/678f89665b42b0fec96e92bc/padlock-1716x965_-_2025-01-21.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale"
              alt="cybersecurity trends"
              className="object-contain rounded-2xl mx-auto my-8 lg:my-0 max-w-[280px] lg:max-w-[90%] w-full"
            />
            <div className="mt-4">
              <p className="text-left text-base/6 text-neutral-200">
              From Kubernetes and microservices to AI-driven cybersecurity, we ensure your systems grow and stay safe.
              </p>
              
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
