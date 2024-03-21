import React from "react";
import Carousel from "../components/Carousel";

const Bestiary2 = () => {
  //const currentIndex = useSelector((state) => state.imageIndex);
  //const [show, setShow] = useState(null);

  /* const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
  }; */

  // const visibility = show ? "visible" : "invisible";

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
