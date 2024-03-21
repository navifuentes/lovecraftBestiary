import React, { useState } from "react";
import NextIcon from "./icons/Next";
import PrevIcon from "./icons/Prev";

import { useDispatch, useSelector } from "react-redux";
import { setImageIndex } from "../reducers/indexReducer";

/* https://lovecraftapirest.fly.dev/ */

const Carousel2 = ({ children: slides }) => {
  const curr = useSelector((state) => state.imageIndex);
  const dispatch = useDispatch();

  const goToPrevSlide = () => {
    const newIndex = curr === 0 ? slides.length - 1 : curr - 1;
    dispatch(setImageIndex(newIndex));
  };

  const goToNextSlide = () => {
    const newIndex = curr === slides.length - 1 ? 0 : curr + 1;
    dispatch(setImageIndex(newIndex));
  };

  return (
    <div className="bg-old-page flex flex-col items-center rounded-3xl border-4 border-yellow-950 p-4 mt-[5vh]">
      <h2 className="text-black font-bold text-6xl pb-6 top-2 z-20 text-center">
        Beast Name
      </h2>
      <div className="flex justify-between">
        <PrevIcon w={"3em"} h={"3em"} handleClick={goToPrevSlide} />
        <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
          <div className="font-bold m-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            veniam voluptates accusamus nisi magnam itaque quibusdam,
            dignissimos ipsa reiciendis corrupti, odit hic, illum ut neque.
          </div>
          <div className="w-[35%] overflow-hidden ">
            <div
              className="flex"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {slides}
            </div>
          </div>
        </div>
        <NextIcon w={"3em"} h={"3em"} handleClick={goToNextSlide} />
      </div>
    </div>
  );
};

export default Carousel2;
