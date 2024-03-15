import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-around gap-8 py-44 mx-10">
      <div className="flex items-center">
        <div className="text-white text-center text-5xl font-mono">
          Welcome, fellow readers.
        </div>
      </div>
      <div className="mx-10 rounded-full overflow-hidden shadow-xl shadow-black">
        <img
          className="w-[25vw] h-[60vh]"
          src="https://i.redd.it/qmdmlxd8ldn21.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
