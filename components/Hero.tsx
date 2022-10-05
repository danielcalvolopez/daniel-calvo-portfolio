import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import daniPic from "./../images/dani.jpeg";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Daniel Calvo",
      "This-portfolio-required-5-coffees.tsx",
      "<WithoutCaffeine />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div>
        <picture>
          <source
            srcSet="https://i.ibb.co/LN9T8MH/Untitled-design-7.png"
            type="image/webp"
          />
          <img
            className="relative rounded-full h-32 w-32 mx-auto object-cover "
            src="https://i.ibb.co/LN9T8MH/Untitled-design-7.png"
            alt="dani"
          />
        </picture>
      </div>
      <h1 className="z-40">
        <span>{text}</span>
        <Cursor cursorColor="#64ffda" />
      </h1>
    </div>
  );
};

export default Hero;
