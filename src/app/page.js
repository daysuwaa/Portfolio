"use client";
import Navbar from "./components/Navbar";
import Home from "./NavPages/Home";
import About from "./NavPages/About";
import Projects from "./NavPages/Projects";
import Contact from "./NavPages/Contact";
import Projectssm from "./components/Projectssm";
import Footer from "./components/Footer";
import Tool from "./NavPages/Tool";
import { motion, useScroll } from "motion/react";

export default function Homee() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <Navbar />
      {/* <motion.div
        style={{ scaleX: scrollYProgress }}
        // className="lg:hidden block"
      > */}
      <div className="flex justify-center">
        <div className="w-full px-6 sm:px-12 md:px-12 lg:px-20 xl:px-28 max-w-7xl">
          <Home />
          <About />
          <Tool />
          <Projects />
          <Projectssm />
          <Contact />
        </div>
      </div>
      <Footer />
      {/* </motion.div> */}
    </div>
  );
}
