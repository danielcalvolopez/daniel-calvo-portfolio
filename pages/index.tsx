import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
        <link rel="icon" href="/dclogo.png" />
      </Head>
      <Header />
      <section id="home" className="snap-start">
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
      <Link href="#home">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex item-center justify-center">
            <picture>
              <img
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src="https://i.postimg.cc/Rh0WD7nW/DC.png"
                alt="logo"
              />
            </picture>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
