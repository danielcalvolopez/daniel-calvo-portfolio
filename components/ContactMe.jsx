import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./UI/Modal";
import LoadingSpinner from "./UI/LoadingSpinner";

const ContactMe = () => {
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_psxjbum",
        "template_pbt6hnr",
        form.current,
        "z6YcqDik5ar1p9a8x"
      )
      .then(
        (result) => {
          setSuccess(true);
          setOpenModal(true);
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          setSuccess(false);
          setOpenModal(true);
          setIsLoading(false);
          e.target.reset();
        }
      );
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="flex absolute top-24 uppercase indent-5 tracking-[20px] text-[#e6f1ff] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 text-[#e6f1ff]">
        <motion.h4
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="text-4xl font-semibold text-center   bg-gradient-to-r bg-clip-text  text-transparent 
          from-[#64ffda] via-[#ccd6f6] to-[#495670]
          animate-text"
        >
          Lets work together!
        </motion.h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <BsTelephoneFill className="text-[#64ffda] animate-pulse h-4 w-4" />
            <p className="text-xl text-[#a8b2d1]">+44 7756 130 952</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelope className="text-[#64ffda] animate-pulse h-4 w-4" />
            <p className="text-xl text-[#a8b2d1]">acidistrict@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <IoLocationSharp className="text-[#64ffda] animate-pulse h-5 w-5" />
            <p className="text-xl text-[#a8b2d1]">London</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput "
              type="text"
              name="user_name"
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
              name="user_email"
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
          />
          <textarea
            placeholder="Message"
            className="contactInput"
            name="message"
          />
          <button
            type="submit"
            className="border border-[#64ffda] py-5 px-10 hover:bg-[#64ffda3d] text-[#64ffda] rounded flex justify-center items-center"
          >
            {isLoading ? <LoadingSpinner /> : <p>Submit</p>}
          </button>
        </form>
      </div>
      {openModal && (
        <Modal successMessage={success} toggleModal={setOpenModal} />
      )}
    </div>
  );
};

export default ContactMe;
