import { motion } from "framer-motion";
import projects from "./../../utils/projects";
import Project from "./Project";

const Projects = () => {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase indent-5 tracking-[20px] text-[#e6f1ff] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-[#495670]/20 scrollbar-thumb-[#64ffda]/80 mt-5">
        {projects.map(({ alt, img, name, technologies, demoURL, repoURL }) => (
          <Project
            key={alt}
            name={name}
            technologies={technologies}
            img={img}
            alt={alt}
            demoURL={demoURL}
            repoURL={repoURL}
          />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#57cbff]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
