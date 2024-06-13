import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Tools from "../components/Tools";
import Services from "../components/Services";
import Me from "../../../public/me.png";
import Contactme from "../components/Contactme";
import ScrollTools from "../components/ScrollTools";
import Link from "next/link";

const About = () => {
  return (
    <section id="section2">
      <div className=" pt-[6rem] min-h-screen border-t-[0.2px] border-gray-300">
        <div className="grid md:grid-cols-1 text-center items-center">
          <div>
            <h1 className="text-3xl pompiere-font ">
              -
              <span className=" mx-3 font-inter   gradienttext dark:bg-gradient-to-r  from-fuchsia-400 to-[#251729]">
                A bit about Me.
              </span>
            </h1>
            <div className=" font-light leading-7 mt-7 text-[13px]  inter-font">
              Hi, I&apos;m Aiwerioghene Adesuwa, but i go by{" "}
              <span className="dark:text-fuchsia-300 text-fuchsia-500  font-bold">
                Daysuwa
              </span>{" "}
              on all social media platforms. I am a{" "}
              <span className="dark:text-fuchsia-300 text-fuchsia-500  font-bold">
                Front End Developer
              </span>{" "}
              based in Lagos with over a year of experience. I specialize in
              creating attractive and user-friendly web interfaces, focusing on
              responsive design and clean code.I am Passionate about technology
              and constantly learning. I am committed to building engaging and
              efficient digital experiences.
              <br></br>
              <i className="font-semibold"> Feel free to reach out to me ;)</i>
              <br></br>
              <Link href="#section4">
                <>
                  <button className="contactmebutton   mt-5  font-medium animate-bounce">
                    Contact me
                  </button>
                </>
              </Link>
            </div>
          </div>
        </div>
        <Tools />
        <ScrollTools />
        <Services />
      </div>
    </section>
  );
};

export default About;
