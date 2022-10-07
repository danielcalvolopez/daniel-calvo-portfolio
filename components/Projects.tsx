import { motion } from "framer-motion";
import projects from "./../utils/projects";

type Props = {};

const Projects = (props: Props) => {
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#e6f1ff] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-[#495670]/20 scrollbar-thumb-[#64ffda]/80 mt-5">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project.alt}
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
              src={project.img}
              alt={project.alt}
              className="mt-20 sm:max-w-xl "
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-[#a8b2d1] text-4xl font-semibold text-center">
                <span className="underline decoration-[#64ffda]/50">
                  Project {i + 1}/{projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <div className=" grid lg:grid-cols-2 sm:grid-rows-2 gap-5">
                <div className="text-[#a8b2d1] space-y-2 px-0  flex flex-col items-start ">
                  <p className="technologies">{project.technology1}</p>
                  <p className="technologies">{project.technology2}</p>
                  <p className="technologies">{project.technology3}</p>
                  <p className="technologies">{project.technology4}</p>
                  <p className="technologies">{project.technology5}</p>
                  <p className="technologies">{project.technology6}</p>
                </div>

                <div className="px-0 md:px-10 flex flex-col items-center justify-center gap-10">
                  <a href={project.demoURL}>
                    <button className="projectsBtn">Demo</button>
                  </a>
                  <a href={project.repoURL}>
                    <button className="projectsBtn">Repo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#57cbff]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
