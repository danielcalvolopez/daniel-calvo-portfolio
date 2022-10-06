import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

type Props = {};

const Header = (props: Props) => {
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
            <TiSocialTwitter
              className="socialicon greenOnHover"
              color="#8892B1"
              size="35"
            />
          </a>
          <a href="https://github.com/danielcalvolopez">
            <AiFillGithub className="socialicon" color="#8892B1" size="28" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-calvo-lopez-97607187">
            <TiSocialLinkedin
              className="socialicon"
              color="#8892B1"
              size="40"
            />
          </a>
          <a href="https://www.instagram.com/danicalvomusic">
            <RiInstagramLine className="socialicon" color="#8892B1" size="29" />
          </a>
        </div>

        {/* <SocialIcon
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
        /> */}
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
          className="flex flex-row items-center text-[#8892b0]-300 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <FaEnvelope
              size="17"
              color="#8892B1"
              className="hover:fill-[#64FFF7]"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-[#8892B1]  hover:text-[#64FFF7]">
              Get in touch
            </p>
          </div>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
