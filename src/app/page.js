"use client";
import Navbar from "./components/Navbar";
import Home from "./NavPages/Home";
import About from "./NavPages/About";
import Projects from "./NavPages/Projects";
import Contact from "./NavPages/Contact";
import Projectssm from "./components/Projectssm";

export default function Homee() {
  return (
    <div>
      <Navbar />
      <div className="mx-[1.5rem] sm:mx-[4rem] md:mx-[4rem] lg:mx-[8rem] xl:mx-[10rem]">
        <Home />
        <About />
        <Projects />
        <Projectssm />
        <Contact />
      </div>
    </div>
  );
}
