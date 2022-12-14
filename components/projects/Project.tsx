import React from "react";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";
import { AiFillGithub as GitHubLogo } from "react-icons/ai";
import Link from "next/link";

type Props = {
  name: string;
  img: string;
  alt: string;
  demoURL: string;
  repoURL: string;
  technologies1: string[];
  technologies2: string[];
  description: string;
};

const Project = ({
  name,
  img,
  alt,
  demoURL,
  repoURL,
  technologies1,
  technologies2,
  description,
}: Props) => {
  return (
    <div
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-20 md:p-44 h-screen overflow-hidden"
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
        className="sm:max-w-xl "
      />

      <div className="flex flex-col px-0 md:px-2 max-w-6xl ">
        <div className="flex flex-row justify-center items-center">
          <h4 className=" text-[#a8b2d1] text-2xl md:text-4xl font-semibold text-center mr-4">
            {name}
          </h4>
          <div className="flex flex-row items-center justify-center ">
            <Link href={demoURL}>
              <a target="_blank">
                <button className="links-btn flex flex-row items-center justify-center gap-1">
                  <IoOpenOutline size="25" />
                </button>
              </a>
            </Link>
            <Link href={repoURL}>
              <a target="_blank">
                <button className="links-btn flex flex-row items-center justify-center">
                  <GitHubLogo size="25" />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center">
          <div className="text-[#a8b2d1] space-y-3 px-0 flex flex-col items-center justify-center ">
            <div className="hidden font-thin p-4 md:w-96">{description}</div>

            <div className="flex flex-col mt-10 md:flex-row md:gap-10">
              <div className="flex flex-col items-start">
                {technologies1.map((technology) => (
                  <p key={technology} className="technologies">
                    <BiRightArrow color="#64ffda" />
                    {technology}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-start">
                {technologies2.map((technology) => (
                  <p key={technology} className="technologies">
                    <BiRightArrow color="#64ffda" />
                    {technology}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
