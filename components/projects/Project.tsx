import React from "react";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";

type Props = {
  name: string;
  img: string;
  alt: string;
  demoURL: string;
  repoURL: string;
  technologies: string[];
};

const Project = ({ name, img, alt, demoURL, repoURL, technologies }: Props) => {
  return (
    <div
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
      key={alt}
    >
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={img}
        alt={alt}
        className="mt-20 sm:max-w-xl "
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
        <h4 className="text-[#a8b2d1] text-4xl font-semibold text-center ">
          {name}
        </h4>
        <div className=" grid lg:grid-cols-2 sm:grid-rows-2 gap-5">
          <div className="text-[#a8b2d1] space-y-2 px-0  flex flex-col items-start ">
            {technologies.map((technology) => (
              <p key={technology} className="technologies">
                <BiRightArrow color="#64ffda" />
                {technology}
              </p>
            ))}
          </div>
          <div className="px-0 md:px-10 flex flex-col items-center justify-center gap-10">
            <a href={demoURL}>
              <button className="projects-btn">Demo</button>
            </a>
            <a href={repoURL}>
              <button className="projects-btn">Repo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
