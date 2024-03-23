import React, { useEffect, useState } from "react";
import LocationIcon from "../components/icons/Location";

const Map = () => {
  const [show1, setShow1] = useState(null);
  const [show2, setShow2] = useState(null);
  const [showMap, setShowMap] = useState(1);
  const [mapOneVisibility, setMapOneVisibility] = useState("visible");
  const [mapTwoVisibility, setMapTwoVisibility] = useState("invisible");

  const visibility1 = show1 ? "mapNav" : "hidden";
  const visibility2 = show2 ? "mapNav" : "hidden";

  useEffect(() => {
    if (showMap === 1) {
      setMapOneVisibility("");
      setMapTwoVisibility("hidden");
    } else if (showMap === 2) {
      setMapOneVisibility("hidden");
      setMapTwoVisibility("");
    }
  }, [showMap]);

  return (
    <div className="sm:absolute relative">
      {/* MAPS */}
      <div className="w-[100vw]">
        <img
          className={`md:min-h-screen md:min-w-full h-full w-full overflow-auto top-0 left-0 ${mapOneVisibility}`}
          src="/our-world-map.jpg"
          alt=""
        />
        <img
          className={`md:min-h-screen md:min-w-full h-full w-full overflow-auto top-0 left-0 ${mapTwoVisibility}`}
          src="/dreamlands-map.jpg"
          alt=""
        />
      </div>
      {/* MAPS BUTTON NAV */}
      <div className="fixed flex flex-col gap-y-4 top-[40vh] left-5">
        <button
          onMouseOver={() => setShow1(true)}
          onMouseOut={() => setShow1(null)}
          onClick={() => setShowMap(1)}
          className={`bg-black/70
          rounded-full ring-2
          w-[3.5em] h-[3.2em] gap-x-4
          text-white
          flex items-center justify-center
          overflow-hidden
          transition-all
          delay-200
          ease-in-out 
          
          hover:w-[12em]
          hover:pl-4
             `}
        >
          <LocationIcon h={"3em"} w={"3em"} />
          <span className={`text-xl ${visibility1}`}>Our World</span>
        </button>
        <button
          onMouseOver={() => setShow2(true)}
          onMouseOut={() => setShow2(null)}
          onClick={() => setShowMap(2)}
          className={`bg-black/70
            rounded-full ring-2
            w-[3.5em] h-[3.2em] gap-x-4
            text-white
            flex items-center justify-center
            overflow-hidden
            transition-all
            delay-200
            ease-in-out 
            
            hover:w-[12em]
            hover:pl-4
             `}
        >
          <LocationIcon h={"3em"} w={"3em"} />
          <span className={`text-xl ${visibility2}`}>Dreamlands</span>
        </button>
      </div>
    </div>
  );
};

export default Map;

/* text-3xl text-white sticky z-10 mr-[90vw] mt-[40vh] flex flex-col ml-4 */
