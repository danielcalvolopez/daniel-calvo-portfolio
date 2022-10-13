import { motion } from "framer-motion";
import projects from "../../utils/projects";
import Project from "./Project";
import {
  BsChevronRight as ArrowRight,
  BsChevronLeft as ArrowLeft,
} from "react-icons/bs";
import React, { useState } from "react";

const Projects = () => {
  const [currentSlide, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrent(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-x-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase indent-5 tracking-[20px] text-[#e6f1ff] text-2xl">
        Projects
      </h3>

      <ArrowLeft
        onClick={prevSlide}
        className="arrow left-3 lg:left-48 cursor-pointer hover:fill-[#64ffda]"
      />

      <div className="relative w-full flex overflow-y-hidden overflow-x-hidden snap-x snap-mandatory z-20 mt-5">
        {projects.map(
          (
            {
              alt,
              img,
              name,
              technologies1,
              technologies2,
              demoURL,
              repoURL,
              description,
            },
            index
          ) => {
            return (
              <div key={index}>
                {index === currentSlide && (
                  <Project
                    key={alt}
                    name={name}
                    technologies1={technologies1}
                    technologies2={technologies2}
                    img={img}
                    alt={alt}
                    demoURL={demoURL}
                    repoURL={repoURL}
                    description={description}
                  />
                )}
              </div>
            );
          }
        )}
      </div>

      <ArrowRight
        onClick={nextSlide}
        className="arrow right-3 lg:right-48 cursor-pointer hover:fill-[#64ffda]"
      />

      <div className="w-full absolute top-[30%] bg-[#57cbff]/10 left-0 h-[500px] -skew-y-12 z-0" />
    </motion.div>
  );
};

export default Projects;
