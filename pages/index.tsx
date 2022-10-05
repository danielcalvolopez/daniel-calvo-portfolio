import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Pannel from "../components/Pannel";

const Home: NextPage = () => {
  return (
    <div className="bg-[#0a192f] text-[#ccd6f6] h-screen snap-y snap-mandatory overflow-scroll z-0 font-my-font">
      <Head>
        <title>Daniel Calvo Portfolio</title>
      </Head>

      <Header />

      {/* Hero*/}
      <section id="hero" className="snap-center">
        <Pannel />
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
