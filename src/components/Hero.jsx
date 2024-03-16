import React from "react";
import Footer from "./footer/Footer";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-screen bg-lc1 bg-cover"></div>
      </div>
      <div className="flex justify-around gap-8 mt-[25vh] mx-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-center text-5xl font-mono">
            Welcome, fellow readers.
          </p>
          <span className="text-white font-mono text-4xl">
            Behold incomesaruble creatures
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
      <Footer />
    </>
  );
};

export default Hero;
