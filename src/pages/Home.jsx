import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="overflow-y-auto lg:overflow-hidden scrollbar-home">
      {/* BACKGROUND */}
      <div className="flex flex-col items-center">
        <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-lc1 bg-cover"></div>
      </div>
      {/* HERO */}
      <Hero />
    </div>
  );
};

export default Home;
