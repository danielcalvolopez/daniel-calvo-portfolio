import { motion } from "framer-motion";

const About = () => {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row sm:mt-0 max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase indent-5 tracking-[20px] text-[#e6f1ff] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://i.ibb.co/ZVvRDqT/Untitled-design-8.png"
        alt="danicolor"
        className="mt-3.5 shadow-xl -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-95 md:h-95 xl:w-[500px] xl:h-[500px] "
      />
      <div className="space-y-0 md:space-y-5 px-0 md:px-10 ">
        <h4 className="text-4xl hidden md:flex font-semibold text-[#ccd6f6]">
          Here is a little background
        </h4>
        <p className="text-[#a8b2d1] text-lg text-base">
          I have two passions, Music and{" "}
          <span className="green-text">Technology</span>, and I have been using
          technology as a tool to make music my entire life. Still, the moment
          that really defined what my path would be was when I was studying
          Sound Engineering at the university, one of the modules was music
          software programming, and since then I have not stopped learning
          something new, every day. I´m also a{" "}
          <span className="green-text"> (pretty bad)</span> surfer and a wannabe
          gamer.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
