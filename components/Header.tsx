import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="socialicon"
          url="https://twitter.com/danicalvomusic"
          fgColor="#8892B1"
          bgColor="transparent"
        />
        <SocialIcon
          className="socialicon"
          url="https://github.com/danielcalvolopez"
          fgColor="#8892B1"
          bgColor="transparent"
        />
        <SocialIcon
          className="socialicon"
          url="https://www.linkedin.com/in/daniel-calvo-lopez-97607187/"
          fgColor="#8892B1"
          bgColor="transparent"
        />
        <SocialIcon
          className="socialicon"
          url="https://www.instagram.com/danicalvomusic/"
          fgColor="#8892B1"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-[#8892b0]-300 cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#8892B1"
            bgColor="transparent"
          />
        </Link>
        <p className="uppercase hidden md:inline-flex text-sm text-[#8892B1]">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
