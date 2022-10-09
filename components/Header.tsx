import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-10 xl:items-center">
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
        <div className="flex flex-row items-center gap-3 cursor-pointer">
          <a href="https://twitter.com/danicalvomusic">
            <TiSocialTwitter className="socialicon" color="#8892B1" size="33" />
          </a>
          <a href="https://github.com/danielcalvolopez">
            <AiFillGithub className="socialicon" color="#8892B1" size="25" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-calvo-lopez-97607187">
            <IoLogoLinkedin className="socialicon" color="#8892B1" size="26" />
          </a>
          <a href="https://www.instagram.com/danicalvomusic/">
            <RiInstagramLine className="socialicon" color="#8892B1" size="24" />
          </a>
        </div>
      </motion.div>

      <Link href="#contact">
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
          className="get-in-touch-container flex flex-row items-center text-[#8892b0]-300 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <FaEnvelope
              size="17"
              color="#8892B1"
              className="get-in-touch-icon"
            />
            <p className="get-in-touch-text uppercase hidden md:inline-flex text-sm text-[#8892B1]">
              Get in touch
            </p>
          </div>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
