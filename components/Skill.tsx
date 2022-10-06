import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
        alt="reactlogo"
        className="rounded-full h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 border border-[#112240] object-cover filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#64ffda] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#0a192f] opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;