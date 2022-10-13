import { motion } from "framer-motion";
import { TbCoffee } from "react-icons/tb";

type Props = {
  directionLeft: boolean;
  name: string;
  imgSrc: string;
  alt: string;
  percentage: number;
};

const Skill = ({ name, imgSrc, alt, percentage, directionLeft }: Props) => {
  return (
    <>
      <div key={name}>
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={imgSrc}
            alt={alt}
            className="rounded-full h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32  object-cover filter group-hover:grayscale transition duration-300 ease-in-out "
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#64ffda] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-xs font-bold">{name.toUpperCase()}</p>
              <div>
                <p className="flex text-3xl font-bold text-[#0a192f] opacity-100">
                  {percentage}
                  <TbCoffee />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
