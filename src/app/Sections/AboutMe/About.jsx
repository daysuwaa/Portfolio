import React from "react";
import { motion } from "framer-motion";
import Bring from "../AboutMe/components/WhatIBring";
import Funfacts from "../AboutMe/components/Funfacts";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
    >
      <section id="section2" className="scroll-mt-24">
        <div className=" pt-[6rem] min-h-screen border-t-[0.2px] border-gray-300">
          <div className="grid md:grid-cols-1 text-center items-center">
            <div className=" text-center mx-auto">
              <div className="floating-element"></div>
              <h1 className="text-4xl pompiere-font ">
                -<span className=" mx-3 font-inter  ">A bit about Me.</span>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mt-2"></div>
                <div className="floating-element"></div>
              </h1>
              <div className=" font-light  mt-7 text-[14px] lg:text-[16px] leading-[40px]  inter-font">
                Hi, I&apos;m Aiwerioghene Adesuwa, a
                <span className="text-rose-500   font-bold">
                  {" "}
                  Front End Developer
                </span>{" "}
                who loves crafting clean, user-friendly web experiences with
                React, Next.js, and Tailwind CSS. I enjoy solving real-world
                problems, turning ideas into smooth, responsive interfaces, and
                constantly exploring better ways to build for the web. I hold a
                <span className="text-rose-500   font-bold">
                  {" "}
                  Bachelor of Science degree in Computer Science from Babcock
                  University
                </span>{" "}
                and love staying ahead in the evolving tech landscape by picking
                up new tools, frameworks, and technologies. Whether working
                independently or as part of a team, I’m driven by curiosity,
                creativity, and a commitment to building impactful digital
                solutions.
                <br></br>
                {/* <p className="font-bold">
                  I’m open to new front-end opportunities and collaborations,
                  let’s build something great together!
                </p> */}
                <br></br>
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
