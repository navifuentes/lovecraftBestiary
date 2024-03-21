import { useState } from "react";
import { useSelector } from "react-redux";

import Footer from "../components/footer/Footer";
import Carousel from "../components/Carousel";
import CloseIcon from "../components/icons/Close";

import img1 from "../images/deep-one.jpg";
import img2 from "../images/byakhee.jpg";
import img3 from "../images/dhole.jpg";
import img4 from "../images/ithaqua.jpg";
import img5 from "../images/shantak.jpg";
import img6 from "../images/star-vampire.jpg";

const Bestiary = () => {
  const currentIndex = useSelector((state) => state.imageIndex);
  const [show, setShow] = useState(null);
  const arr = [img1, img2, img3, img4, img5, img6];

  const visibility = show ? "visible" : "invisible";

  return (
    <>
      <div>
        <div className="relative flex flex-col items-center">
          <div className="fixed top-0 bottom-0 z-[-2] min-h-screen w-screen bg-lc2 bg-cover"></div>
        </div>
        <article className="flex flex-col justify-center items-center mt-[10vh]">
          <Carousel>
            {arr.map((i) => (
              <img
                onClick={() => setShow(!show)}
                className="object-fill opacity-90 sepia rounded-2xl shadow-xl shadow-gray-700 cursor-pointer"
                src={i}
              />
            ))}
          </Carousel>
        </article>
        <article
          className={`absolute top-0 left-0 bg-black/85 w-[100vw] h-[100vh] flex flex-col justify-center items-center z-40 ${visibility}`}
        >
          <button
            className="bg-white/20 rounded-full mb-2"
            onClick={() => setShow(!show)}
          >
            <CloseIcon h={"3em"} w={"3em"} />
          </button>
          <img className="h-[90vh] " src={arr[currentIndex]} alt="" />
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Bestiary;
