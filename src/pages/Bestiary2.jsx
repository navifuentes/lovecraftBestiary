import React from "react";
import Carousel from "../components/Carousel";

const Bestiary2 = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center">
        <div className="fixed top-0 bottom-0 z-[-2] min-h-screen w-screen bg-lc2 bg-cover"></div>
      </div>
      <div className="mt-[10vh]">
        <Carousel />
      </div>
    </div>
  );
};

export default Bestiary2;
