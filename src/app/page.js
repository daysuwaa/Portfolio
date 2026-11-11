import Navbar from "./components/Navbar";
import HeroV2 from "./v2/HeroV2";
import WorkV2 from "./v2/WorkV2";
import Writing from "./Sections/Writing";
import Experience from "./Sections/Experience";
import Tool from "./Sections/Tool";
import About from "./Sections/AboutMe/About";
import Contact from "./Sections/Contact";
import Footer from "./components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <HeroV2 />
        <WorkV2 />
        <Writing />
        <Experience />
        <Tool />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
