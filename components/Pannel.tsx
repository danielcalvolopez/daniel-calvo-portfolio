import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";

type Props = {};

const Pannel = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Daniel Calvo",
      `This-portfolio-required-5-coffees-to-be-built.tsx`,
      "<WithoutCaffeine />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <picture>
        <source
          srcSet="https://i.ibb.co/LN9T8MH/Untitled-design-7.png"
          type="image/webp"
        />
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover transform transition duration-500 hover:scale-110"
          src="https://i.ibb.co/LN9T8MH/Untitled-design-7.png"
          alt="dani"
        />
      </picture>
      <div className="z-20">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="text-sm uppercase text-[#64ffda] pb-2 tracking-[10px] font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-[#64ffda] via-[#ccd6f6] to-[#495670]
            animate-text"
        >
          Front End Developer
        </motion.h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 text-[#ccd6f6]">{text}</span>
          <Cursor cursorColor="#64ffda" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="pannelBtn link link-underline link-underline-black">
              <span className="text-[#64ffda]">1. </span>About
            </button>
          </Link>
          <Link href="#experience">
            <button className="pannelBtn link link-underline link-underline-black">
              <span className="text-[#64ffda]">2. </span>Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="pannelBtn link link-underline link-underline-black">
              <span className="text-[#64ffda]">3. </span>Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="pannelBtn link link-underline link-underline-black ">
              <span className="text-[#64ffda]">4. </span>Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pannel;
