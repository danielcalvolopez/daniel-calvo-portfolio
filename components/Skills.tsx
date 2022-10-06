import { motion } from "framer-motion";
import Skill from "./Skill";
import { TbCoffee } from "react-icons/tb";

type Props = {};

const Skills = (props: Props) => {
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#e6f1ff] text-2xl">
        Skills
      </h3>

      <h3 className="flex gap-3 items-center absolute top-36 uppercase tracking-[3px] text-[#a8b2d1] text-sm">
        Hover over a skill for current proficiency ( measured in{" "}
        <TbCoffee size={20} color={"#64FFF7"} />)
      </h3>

      <div className="grid grid-cols-4 gap-5 ">
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
