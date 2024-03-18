import React from "react";
import GithubIcon from "../icons/Github";
import MailIcon from "../icons/Mail";

const Footer = () => {
  return (
    <div
      className={`flex gap-x-[10vw] sm:gap-x-[30vw]
      justify-evenly sm:justify-evenly 
      w-full py-2
      bg-gradient-to-t from-black/90 to-black/0`}
    >
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
