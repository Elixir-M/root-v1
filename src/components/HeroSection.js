// import React from "react";
// import Spline from "@splinetool/react-spline/next";
// import { Spotlight } from "./ui/Spotlight";
// import { FocusCardsDemo } from "./FocusCardsDemo";

// const HeroSection = () => {
//   return (
//     <div className="container mx-auto relative">
//       {/* // <Spotlight
//       //   className="-top-40 left-0 md:left-60 md:-top-20"
//       //   fill="white"
//       // /> */}
//       <div className="grid grid-cols-1 md:grid-cols-2 min-h-[850px] pt-8">
//         {/* Left Section */}
//         <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-16 space-y-4">
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
//             Innovate. Transform. Excel.
//           </h1>
//           <p className="text-sm sm:text-base lg:text-lg">
//             Empowering businesses with end-to-end IT consultation, development,
//             and services. Your success is our mission.
//           </p>
//         </div>
//         {/* Right Section */}
//         <div className="flex justify-center items-center p-4">
//           <Spline
//             scene="https://prod.spline.design/8fcFSxa15zPBmmEZ/scene.splinecode"
//             className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
//           />
//         </div>
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           top: "85%",
//           left: 0,
//           right: 0,
//           zIndex: 10,
//           background: "black",
//         }}
//       >
//         <FocusCardsDemo />
//       </div>
//     </div>
//   );
// };

import React from "react";
import Spline from "@splinetool/react-spline/next";
import { Spotlight } from "./ui/Spotlight";
import { FocusCardsDemo } from "./FocusCardsDemo";
import WhiteScreenAnimation from "./WhiteScreenAnimation";

const HeroSection = () => {
  return (
    <div className="container mx-auto relative">
      {/* <WhiteScreenAnimation serviceName="Elixir-M" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[850px] pt-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-16 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Empowering Innovation, Driving Transformation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white">
            Unlock the power of end-to-end IT consultation, development, and
            digital transformation. Your success is our mission.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center p-4">
          <Spline
            scene="https://prod.spline.design/8fcFSxa15zPBmmEZ/scene.splinecode"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
      {/* <div className="mt-[calc(-20vh+5vw)]">
        <FocusCardsDemo />
      </div> */}
    </div>
  );
};


export default HeroSection;
