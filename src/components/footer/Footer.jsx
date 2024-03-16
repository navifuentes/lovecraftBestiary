import React from "react";
import GithubIcon from "../icons/Github";
import MailIcon from "../icons/Mail";

const Footer = () => {
  return (
    <div className="absolute bottom-0 flex gap-x-[10vw] justify-evenly sm:gap-x-[30vw] sm:justify-evenly bg-black/50 rounded-full px-10 ">
      <p className="text-white text-2xl sm:text-4xl ">© Iván Fuentes</p>
      <nav className="text-white flex justify-center items-center">
        <span className="flex x-gap-4 sm:text-4xl">
          <GithubIcon h={"1.5em"} w={"1.5em"} />
          <p>Github</p>
        </span>
        <span className="flex x-gap-4 sm:text-4xl">
          <MailIcon h={"1.5em"} w={"1.5em"} />
          <p>Contact me</p>
        </span>
      </nav>
    </div>
  );
};

export default Footer;
