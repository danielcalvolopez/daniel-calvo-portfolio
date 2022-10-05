import { motion } from "framer-motion";

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
      <div className="w-full absolute top-[30%] bg-[#64ffda]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
