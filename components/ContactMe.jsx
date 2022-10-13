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
  const form = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_psxjbum",
        "template_pbt6hnr",
        form.current,
        "z6YcqDik5ar1p9a8x"
      )
      .then(() => {
        setSuccess(true);
        setOpenModal(true);
        event.target.reset();
      })
      .catch(() => {
        setSuccess(false);
        setOpenModal(true);
        event.target.reset();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="flex absolute top-24 uppercase indent-5 tracking-[20px] text-[#e6f1ff] text-2xl">
          Contact
        </h3>
        <div className="pt-24 flex flex-col space-y-8 text-[#e6f1ff] ">
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

          <div className="flex items-center justify-center">
            <div className="space-y-5 items-center justify-center">
              <div className="flex items-center space-x-5 justify-start">
                <FaEnvelope className="relative left-px text-[#64ffda] h-4 w-4" />
                <a
                  href="mailto:acidistrict@gmail.com"
                  className="text-xl text-[#a8b2d1] py-2 link link-underline link-underline-black"
                >
                  acidistrict@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-5 justify-start">
                <IoLocationSharp className="relative right-px text-[#64ffda] h-5 w-5" />
                <p className="relative right-1 text-xl text-[#a8b2d1]">
                  London, UK
                </p>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className=" grid grid-cols-2 gap-4 max-w-xl"
          >
            <div className="col-span-2 lg:col-span-1">
              <input
                placeholder="Name"
                className="contact-input"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <input
                placeholder="Email"
                className="contact-input"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div className="col-span-2">
              <input
                placeholder="Subject"
                className="contact-input "
                type="text"
                name="subject"
              />
            </div>
            <div className="col-span-2">
              <textarea
                placeholder="Message"
                className="contact-input"
                name="message"
                required
              />
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="border border-[#64ffda] py-5 px-10 hover:bg-[#64ffda3d] text-[#64ffda] rounded flex justify-center items-center w-full "
              >
                {isLoading ? <LoadingSpinner /> : <p>Submit</p>}
              </button>
            </div>
          </form>
        </div>
        {/* <div className="cursor-pointer text-sm text-[#a8b2d1] hover:text-[#64ffda]">
          <a href="https://github.com/danielcalvolopez">
            {" "}
            Designed & Built by Daniel Calvo Lopez
          </a>
        </div> */}
      </div>

      {openModal && (
        <Modal successMessage={success} toggleModal={setOpenModal} />
      )}
    </>
  );
};

export default ContactMe;
