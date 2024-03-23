import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const visibility1 = show ? "hidden" : "";
  const visibility2 = show ? "" : "hidden";
  const rounded = show ? "rounded-3xl" : "rounded-full";
  return (
    <div className="fixed top-0 z-10">
      {/* LARGE QUERY */}
      <nav className=" text-white text-3xl hidden sm:flex gap-x-8 bg-black/50 rounded-full px-20 py-1 mt-[0.25em] ring-2 ring-white/30">
        <img
          className="w-10 h-10 bg-white/10 rounded-full ring-1 ring-white/40"
          src="/cthulhu.svg"
          alt="an octopus with wings and evil eyes"
        />
        <Link to={"/"}>Home</Link>
        <Link to={"/bestiary"}>Bestiary</Link>
        <Link to={"/map"}>Map</Link>
      </nav>
      {/* SMALL QUERY */}
      <nav
        className={`sm:hidden bg-black/50 ${rounded} px-20 py-1 mt-[0.25em] ring-2 ring-white/30`}
      >
        <div className="flex items-center gap-x-10">
          <img
            className="w-10 h-10 bg-white/10 rounded-full ring-1 ring-white/40"
            src="/cthulhu.svg"
            alt="an octopus with wings and evil eyes"
          />
          <button
            className={`text-white text-3xl ${visibility1}`}
            onClick={() => setShow(!show)}
          >
            &#9776;
          </button>
          <button
            className={`text-white text-3xl ${visibility2}`}
            onClick={() => setShow(!show)}
          >
            &#9932;
          </button>
        </div>
        <div
          className={`transition-all ease-in duration-500 flex flex-col text-white text-3xl items-center gap-y-2 py-4 ${visibility2}`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/bestiary"}>Bestiary</Link>
          <Link to={"/map"}>Map</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
