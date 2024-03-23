import React from "react";


const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-8 mt-[22vh]">
        <div className="flex flex-col justify-center text-center items-center w-[40em]">
          <p className="text-white text-center lg:text-5xl text-4xl font-mono">
            Welcome, mortal.
          </p>
          <span className="text-white font-mono text-2xl lg:w-2/3 w-1/2">
            "Welcome to the realm where the shadows writhe and the whispers of
            madness dance upon the winds. Enter, if you dare, into the
            labyrinthine depths of the unknown, where reality is but a fragile
            veil over the abyss of cosmic horrors. Welcome, mortal, to the
            eldritch embrace of Lovecraftian terror."
          </span>
        </div>
        <div className="mx-10 rounded-full overflow-hidden shadow-xl shadow-black">
          <img
            className="lg:w-[25vw] w-auto h-[60vh]"
            src="https://i.redd.it/qmdmlxd8ldn21.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
