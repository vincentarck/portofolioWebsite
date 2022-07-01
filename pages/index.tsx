import type { NextPage } from "next";
import Head from "next/head";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Work from "../components/Work";
import SocialMedia from "../components/SocialMedia";
import About from "../components/About";
import Particle from "../components/Particle";
import Sidebar from "../components/Sidebar";
const Home: NextPage = () => {
  return (
    <div className="space-y-16 relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col gap-5 text-lightest-slate 
      px-10 lg:px-[150px] space-y-20 items-center">
        <Particle />
        <Sidebar />
        <Intro />
        <About />
        <Experience />
        <Work />
      </main>
      <Contact />
      <SocialMedia />
    </div>
  );
};
export default Home;
