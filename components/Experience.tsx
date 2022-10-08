import { motion } from "framer-motion";

type Props = {};

const Experience = (props: Props) => {
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
        Experience
      </h3>{" "}
      <picture>
        <img
          className=""
          src="https://i.imgur.com/e1IneGq.jpg"
          alt="travolta"
        />
      </picture>
    </motion.div>
  );
};

export default Experience;
