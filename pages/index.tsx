import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[#0a192f] text-[#ccd6f6] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Daniel Calvo Portfolio</title>
      </Head>

      <Header />

      {/* Hero*/}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About*/}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;