import React from "react";
import CharacterAnimation from "./ui/3d-image-gaming-animation";

const ThreeDimage = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Metaverse</h1>
          <p className="text-lg text-gray-600">
            Explore the world of 3D illustrations with our Metaverse character. Dive into immersive experiences!
          </p>
        </div>
  
        {/* Right Section: 3D Image */}
        <div className="flex justify-center items-center p-8">
          <CharacterAnimation>
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/300/340/original/3d-render-cute-metaverse-character-illustration-png.png"
              alt="3D Render Cute Metaverse Character"
              className="w-full h-auto max-w-md object-contain relative z-10"
            />
          </CharacterAnimation>
        </div>
      </div>
    );
  };
  
  export default ThreeDimage;