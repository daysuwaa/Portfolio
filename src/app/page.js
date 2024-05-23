"use client";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function Homee() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
