import React from "react";
import Footer from "./footer/Footer";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-screen bg-lc1 bg-cover"></div>
      </div>
      <div className="flex justify-around gap-8 mt-[22vh] mx-10">
        <div className="flex flex-col justify-center text-center items-center w-[40em]">
          <p className="text-white text-center text-5xl font-mono">
            Welcome, mortal.
          </p>
          <span className="text-white font-mono text-2xl">
            "Welcome to the realm where the shadows writhe and the whispers of
            madness dance upon the winds. Enter, if you dare, into the
            labyrinthine depths of the unknown, where reality is but a fragile
            veil over the abyss of cosmic horrors. Welcome, mortal, to the
            eldritch embrace of Lovecraftian terror."
          </span>
        </div>
        <div className="mx-10 rounded-full overflow-hidden shadow-xl shadow-black">
          <img
            className="w-[25vw] h-[60vh]"
            src="https://i.redd.it/qmdmlxd8ldn21.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
