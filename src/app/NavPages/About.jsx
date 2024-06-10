import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Tools from "../components/Tools";
import Services from "../components/Services";
import Me from "../../../public/me.png";
import Contactme from "../components/Contactme";
import ScrollTools from "../components/ScrollTools";

const About = () => {
  return (
    <section id="section2">
      <div className=" pt-[6rem] min-h-screen border-t-[0.2px] border-gray-300">
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl pompiere-font ">
              -
              <span className=" mx-3 font-inter  gradienttext dark:bg-gradient-to-r  from-pink-700 to-[#251729]">
                A bit about Me.
              </span>
            </h1>
            <div className="border-l-8 font-light leading-7 mt-7 text-[13px] px-5 border-rose-700 inter-font">
              Hi, I&apos;m Aiwerioghene Adesuwa, but i go by{" "}
              <span className="text-rose-500 font-bold">Daysuwa</span> on all
              social media platforms. I am a{" "}
              <span className="text-rose-500 font-bold">
                Front End Developer
              </span>{" "}
              based in Lagos with over a year of experience. I specialize in
              creating attractive and user-friendly web interfaces, focusing on
              responsive design and clean code. Passionate about technology and
              constantly learning. <br></br>I'm committed to building engaging
              and efficient digital experiences.
              <br></br>
              <i className="font-semibold">
                {" "}
                Feel free to reach out to me on any of these platforms :)
              </i>
              <Contactme />
            </div>
          </div>
          <div className="hidden md:block  ml-auto">
            <Image src={Me} alt="me" className="w-[400px] h-[400px]" />
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