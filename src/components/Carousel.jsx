import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCreatures } from "../reducers/creaturesReducer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const dispatch = useDispatch();
  const creatures = useSelector((state) => state.creatures);
  console.log("creatures:", creatures);

  useEffect(() => {
    dispatch(initializeCreatures());
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  if (creatures.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* <img
        className="w-[40vw] h-[60vh] opacity-85"
        src={creatures[9].img[0]}
        alt=""
      /> */}
      <Slider {...settings}>
        {creatures.map((creature, index) => (
          <img src={creature.img[0]} alt={creature.name} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
