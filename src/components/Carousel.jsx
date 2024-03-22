import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCreatures } from "../reducers/creaturesReducer";
import { setImageIndex } from "../reducers/indexReducer";

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

  useEffect(() => {
    dispatch(initializeCreatures());
  }, []);

  const handleSwipe = (index) => {
    dispatch(creatureIndex(index));
  };

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
    return <p>Loading...</p>;
  }

  return (
    <div className="w-[90vw] h-[80vh] bg-old-page border-4 border-orange-950 rounded-3xl">
      <h2 key={index} className="text-4xl font-bold">
        {creatures[creatureIndex].name}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center px-5">
        <p
          key={index}
          className="sm:w-[36vw] h-[40vh] font-bold text-xl overflow-y-auto"
        >
          {creatures[creatureIndex].overview}
        </p>

        <Slider {...settings}>
          {creatures.map((creature, index) => (
            <img
              key={index}
              className="object-contain h-[60vh] w-[40vw] opacity-85 cursor-pointer"
              src={creature.img[0]}
              alt={creature.name}
              onClick={() => setShow(!show)}
            />
          ))}
        </Slider>
      </div>
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
