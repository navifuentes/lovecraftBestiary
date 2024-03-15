import React from "react";

const Thumbnail = ({ children: slides, curr }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex overflow-hidden w-10 h-10"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
};

export default Thumbnail;
