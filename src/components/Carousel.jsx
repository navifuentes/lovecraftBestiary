import React, { useState } from "react";
import NextIcon from "./icons/Next";
import PrevIcon from "./icons/Prev";

import { useDispatch, useSelector } from "react-redux";
import { setImageIndex } from "../reducers/indexReducer";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);
  const cleurr = useSelector((state) => state.imageIndex);
  const dispatch = useDispatch();
  console.log(cleurr);

  const goToPrevSlide = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const lol = curr === 0 ? slides.length - 1 : curr - 1;
    dispatch(setImageIndex(lol));
  };

  const goToNextSlide = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    const lol = curr === slides.length - 1 ? 0 : curr + 1;
    dispatch(setImageIndex(lol));
  };

  return (
    <div className="relative bg-old-page flex flex-col items-center rounded-3xl border-4 p-4 border-yellow-950 px-4">
      <h2 className="text-black font-bold text-6xl pb-6 absolute top-2 z-20">
        Beast Name
      </h2>
      <div className="flex">
        <PrevIcon w={"3em"} h={"3em"} handleClick={goToPrevSlide} />
        <div className="overflow-hidden shadow-2xl shadow-black relative w-[32vw]">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides}
          </div>
        </div>
        <NextIcon w={"3em"} h={"3em"} handleClick={goToNextSlide} />
      </div>
    </div>
  );
};

export default Carousel;
