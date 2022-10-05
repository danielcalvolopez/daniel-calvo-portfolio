import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Pannel from "../components/Pannel";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[#0a192f] h-screen snap-y snap-mandatory overflow-scroll z-0 font-my-font">
      <Head>
        <title>Daniel Calvo Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Pannel />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
