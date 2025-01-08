import React from 'react';
import Spline from '@splinetool/react-spline/next';
import Cube from './3DCube';


const ThreeDServices = () => {
  return (
<div className="container mx-auto py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] mt-10">
    {/* Left Section */}
    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-16 space-y-4">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Elixir</h1>
      <p className="text-sm sm:text-base lg:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero quidem maiores ea eligendi quos, ut reprehenderit, dolorum eos, quod id maxime temporibus! Animi molestiae quam laudantium eaque sunt odio dolores, id nihil repellendus necessitatibus ducimus cumque deserunt modi laboriosam!
      </p>
    </div>
    {/* Right Section */}
    <div className="flex justify-center items-center p-4">
      <Spline
        // scene="https://prod.spline.design/aB-TkJ5mWjgOEgg5/scene.splinecode"
        scene="https://prod.spline.design/aB-TkJ5mWjgOEgg5/scene.splinecode"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
      />
      {/* <Cube /> */}
    </div>
  </div>
</div>


  );
};

export default ThreeDServices;
