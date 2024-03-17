import React from "react";
import GithubIcon from "../icons/Github";
import MailIcon from "../icons/Mail";

const Footer = () => {
  return (
    <div className="flex gap-x-[10vw] justify-evenly sm:gap-x-[30vw] sm:justify-evenly bg-black/50 rounded-full px-10 ring-2 ring-white/30 fixed bottom-0 mb-[2vh]">
      <p className="text-white text-2xl sm:text-4xl ">© Iván Fuentes</p>
      <nav className="text-white flex gap-x-8 justify-center items-center">
        <span className="flex x-gap-4 sm:text-4xl">
          <GithubIcon h={"1em"} w={"1em"} />
          <p>Github</p>
        </span>
        <span className="flex x-gap-4 sm:text-4xl">
          <MailIcon h={"1em"} w={"1em"} />
          <p>Contact me</p>
        </span>
      </nav>
    </div>
  );
};

export default Footer;
