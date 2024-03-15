import { useSelector } from "react-redux";

import Carousel from "./components/Carousel";
import ImageContainer from "./components/ImageContainer";
import Hero from "./components/Hero";
//import Carrousel from "./components/Carrousel";
import bgImg from "./images/background2.jpg";
import img1 from "./images/deep-one.jpg";
import img2 from "./images/byakhee.jpg";
import img3 from "./images/dhole.jpg";
import img4 from "./images/ithaqua.jpg";
import img5 from "./images/shantak.jpg";
import img6 from "./images/star-vampire.jpg";
import CloseIcon from "./components/icons/Close";
import { useState } from "react";

function App() {
  const currentIndex = useSelector((state) => state.imageIndex);
  const [show, setShow] = useState(null);
  const arr = [img1, img2, img3, img4, img5, img6];

  const visibility = show ? "visible" : "invisible";

  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Hero />
      <Carousel>
        {arr.map((i) => (
          <img
            onClick={() => setShow(!show)}
            className="object-fill opacity-90 sepia rounded-2xl shadow-xl shadow-gray-700 cursor-pointer"
            src={i}
          />
        ))}
      </Carousel>
      <div
        className={`absolute top-[100vh] bg-black/85 px-[20%] pt-44 pb-24 items-center z-40 ${visibility}`}
      >
        <button className="absolute top-28"
        onClick={()=>setShow(!show)}>
          <CloseIcon h={"5em"} w={"3em"} />
        </button>
        <img src={arr[currentIndex]} alt="" />
      </div>
    </div>
  );
}
export default App;
