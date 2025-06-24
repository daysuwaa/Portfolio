"use client";
import Navbar from "./components/Navbar";
import Home from "./NavPages/Home";
import About from "./NavPages/About";
import Projects from "./NavPages/Projects";
import Contact from "./NavPages/Contact";
import Projectssm from "./components/Projectssm";
import Footer from "./components/Footer";
import Tool from "./NavPages/Tool";

export default function Homee() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}
