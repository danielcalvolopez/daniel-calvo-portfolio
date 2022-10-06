import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Pannel from "../components/Pannel";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[#0a192f] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 font-my-font scrollbar scrollbar-track-[#495670]/20 scrollbar-thumb-[#64ffda]/80">
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
      <section id="experience" className="snap-start">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
