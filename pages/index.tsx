import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { IoIosArrowUp } from "react-icons/io";
import paths from "./../utils/paths";

const Home: NextPage = () => {
  return (
    <div className="bg-[#0a192f] md:pr-2  h-screen snap snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 font-my-font scrollbar-thin scrollbar-track-[#495670]/20 scrollbar-thumb-[#64ffda]/80 overscroll-y-auto overscroll-x-none">
      <Head>
        <title>Daniel Calvo Lopez | Frontend Developer</title>
        <link rel="icon" href="/dani-green.png" />
      </Head>
      <Header />
      {paths.map(({ id, Element }) => (
        <section key={id} id={id} className="snap-start">
          {<Element />}
        </section>
      ))}

      <footer className="sticky bottom-5 w-full flex justify-end">
        <section className="flex item-center justify-center w-24">
          <a href="#index">
            <IoIosArrowUp
              size={40}
              color="#8892B1"
              className="cursor-pointer hover:fill-[#64fff7]"
            />
          </a>
        </section>
      </footer>
    </div>
  );
};

export default Home;
