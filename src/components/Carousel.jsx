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
  const creatureIndex = useSelector((state) => state.imageIndex);
  const creatures = useSelector((state) => state.creatures);
  const [show, setShow] = useState(false);
  const visibility = show ? "visible" : "invisible";
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    dispatch(initializeCreatures());
  }, []);

  const handleSwipe = (index) => {
    dispatch(creatureIndex(index));
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
    onSwipe: handleSwipe,
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
    <div className="w-[90vw] h-[80vh] bg-old-page border-4 border-orange-950 rounded-3xl">
      <Slider {...settings} onSwipe={handleSwipe}>
        {creatures.map((creature, index) => (
          <div key={index}>
            <h2 className="text-4xl text-center font-bold">
              {capitalizeFirstLetter(creature.name)}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center px-5">
              <p
                className={`sm:w-[40vw] h-[40vh] font-bold text-xl overflow-y-auto scrollbar`}
              >
                {creature.overview}
              </p>

              <img
                className="object-contain h-[60vh] w-[40vw] opacity-85 cursor-pointer"
                src={creature.img[0]}
                alt={creature.name}
                onFocusCapture={() => dispatch(setImageIndex(index))}
                onClick={() => setShow(!show)}
              />
            </div>
          </div>
        ))}
      </Slider>
      <article
        className={`absolute top-0 left-0 bg-black/85 w-[100vw] h-[100vh] flex flex-col justify-center items-center z-40 ${visibility}`}
      >
        <button
          className="bg-white/20 rounded-full mb-2"
          onClick={() => setShow(!show)}
        >
          <CloseIcon h={"3em"} w={"3em"} />
        </button>
        <img
          className="h-[90vh] "
          src={creatures[creatureIndex].img[0]}
          alt={creatures[creatureIndex].overview}
        />
      </article>
    </div>
  );
};

export default Carousel;
