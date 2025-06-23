import React from "react";
import { motion } from "framer-motion";
import Bring from "../components/Bring";
import Funfacts from "../components/Funfacts";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
    >
      <section id="section2">
        <div className=" pt-[6rem] min-h-screen border-t-[0.2px] border-gray-300">
          <div className="grid md:grid-cols-1 text-center items-center">
            <div className="max-w-6xl text-center mx-auto">
              <div className="floating-element"></div>
              <h1 className="text-4xl pompiere-font ">
                -<span className=" mx-3 font-inter  ">A bit about Me.</span>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mt-2"></div>
                <div className="floating-element"></div>
              </h1>
              <div className=" font-light  mt-7 text-[14px] lg:text-[16px] leading-[40px]  inter-font">
                Hi, I'm Aiwerioghene Adesuwa, but i go by{" "}
                <span className="text-rose-500  font-bold">Daysuwa</span> on all
                social media platforms. I am a{" "}
                <span className="text-rose-500   font-bold">
                  Front End Developer
                </span>{" "}
                based in Lagos, Nigeria. I am dedicated to crafting beautiful,
                responsive, and user-friendly web experiences. With a strong eye
                for design and a passion for clean, maintainable code, I
                specialize in bringing interfaces to life. I hold a Bachelor of
                Science degree in Computer Science at Babcock University and
                continuously explore new tools, frameworks, and technologies to
                stay ahead in the evolving tech landscape. Whether working
                independently or within a team, I am driven by curiosity,
                creativity, and a commitment to building impactful digital
                solutions.
                <br></br>
                <br></br>
                <div className="floating-element"></div>
                <br></br>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mx-auto">
            <Bring />
            <Funfacts />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
