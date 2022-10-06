import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:acidistrict@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#e6f1ff] text-2xl">
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
            <p className="text-xl text-[#a8b2d1]">
              408 Java House, London E14 0LG
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput "
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="border border-[#64ffda] py-5 px-10 hover:bg-[#64ffda3d] text-[#64ffda] rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
