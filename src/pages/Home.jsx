import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      {/* BACKGROUND */}
      <div className="flex flex-col items-center">
        <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-lc1 bg-fixed"></div>
      </div>
      {/* HERO */}
      <Hero />
    </div>
  );
};

export default Home;
