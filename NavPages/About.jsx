import React from "react";
import Navbar from "../src/app/components/Navbar";
import Image from "next/image";
import Tools from "../src/app/components/Tools";
import Services from "../src/app/components/Services";
import Me from "../public/me.png";
import Contactme from "../src/app/components/Contactme";
import ScrollTools from "../src/app/components/ScrollTools";

const About = () => {
  return (
    <section id="section2">
      <div className=" pt-[6rem] min-h-screen border-t-[0.2px] border-gray-300">
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl ">
              -
              <span className=" mx-3 font-inter pompiere-font gradienttextblack">
                About Me.
              </span>
            </h1>
            <div className="border-l-8 font-light leading-7 mt-5 text-[13px] px-5 border-rose-700 inter-font">
              Hello! I&apos;m{" "}
              <span className="font-bold text-rose-500">Adesuwa</span>, but i go
              by <span className="font-bold text-rose-500">Daysuwa</span> on all
              social media platforms. I am{" "}
              <span className="font-bold text-rose-500">
                Front-End Developer
              </span>{" "}
              based in Nigeria, Lagos. I specialize in building visually
              appealing, user-friendly websites.
              <br></br>
              <br></br>
              <p>
                I&apos;m always eager to learn new technologies and collaborate
                with others to create impactful digital experiences.
              </p>{" "}
              Feel free to reach out to me on any of these platforms
              collaborations :)
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
