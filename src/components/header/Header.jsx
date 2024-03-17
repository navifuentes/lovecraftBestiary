import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 z-40">
      <nav className="text-white text-3xl flex gap-x-8 bg-black/50 rounded-full px-20 py-1 mt-[0.25em] ring-2 ring-white/30">
        <img
          className="w-10 h-10 bg-white/10 rounded-full ring-1 ring-white/40"
          src="/cthulhu.svg"
          alt="an octopus with wings and evil eyes"
        />
        <Link to={"/"}>Home</Link>
        <Link to={"/bestiary"}>Bestiary</Link>
        <Link to={"/map"}>Map</Link>
      </nav>
    </div>
  );
};

export default Header;
