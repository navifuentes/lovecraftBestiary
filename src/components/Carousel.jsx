import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCreatures } from "../reducers/creaturesReducer";
import { setImageIndex } from "../reducers/indexReducer";

import Skeleton from "react-loading-skeleton";
import CloseIcon from "./icons/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const dispatch = useDispatch();
  const creatures = useSelector((state) => state.creatures);
  const [show, setShow] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const visibility = show ? "visible" : "invisible";

  useEffect(() => {
    dispatch(initializeCreatures());
  }, []);

  const handleClick = (index) => {
    setShow(!show);
    setImgIndex(index);
  };
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: false,
  };

  if (creatures.length === 0) {
    return (
      <div className="bg-old-page">
        <Skeleton />
        <div>
          <Skeleton count={10} width={"36vw"} />
          <Skeleton width={"40vw"} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90vw] h-[80vh] py-[3vh] bg-old-page border-4 border-orange-950 rounded-3xl">
      <Slider {...settings}>
        {creatures.map((creature, index) => (
          <div key={index}>
            <h2 className="text-4xl text-center font-bold mb-[5vh]">
              {capitalizeFirstLetter(creature.name)}
            </h2>

            <div className="flex sm:flex-row flex-col-reverse justify-center items-center px-5">
              <p
                className={`mr-1 mb-2 sm:mb-0
                sm:w-[40vw]
                font-bold text-xl overflow-y-auto 
                text-center scrollbar`}
              >
                {creature.overview}
              </p>

              <img
                className="object-contain max-h-[60vh] w-[40vw] opacity-85 cursor-pointer"
                src={creature.img[0]}
                alt={creature.name}
                onClick={() => handleClick(index)}
              />
            </div>
          </div>
        ))}
      </Slider>
      <article
        className={`absolute top-0 left-0 bg-black/85 w-[100vw] h-[100vh] flex flex-col justify-center items-center z-10 ${visibility}`}
      >
        <button
          className="bg-white/20 rounded-full mb-2"
          onClick={() => setShow(!show)}
        >
          <CloseIcon h={"3em"} w={"3em"} />
        </button>
        <img className="h-[90vh] " src={creatures[imgIndex].img[0]} alt="" />
      </article>
    </div>
  );
};

export default Carousel;
