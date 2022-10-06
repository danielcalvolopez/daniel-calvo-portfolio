import { motion } from "framer-motion";
import skillInfo from "./../utils/skillInfo";
import { TbCoffee } from "react-icons/tb";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <>
      {skillInfo.map((skills) => (
        <>
          <div key={skills.name} className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={skills.url}
              alt={skills.alt}
              className="rounded-full h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32  object-cover filter group-hover:grayscale transition duration-300 ease-in-out "
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#64ffda] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="flex text-3xl font-bold text-[#0a192f] opacity-100">
                  {skills.percentage}
                  <TbCoffee />
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Skill;
