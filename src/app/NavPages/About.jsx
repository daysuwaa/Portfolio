import React from "react";
import Tools from "../components/Tools";
import Services from "../components/Services";
import ScrollTools from "../components/ScrollTools";
import { motion } from "framer-motion";

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
            <div>
              <div className="floating-element"></div>
              <h1 className="text-3xl pompiere-font ">
                -
                <span className=" mx-3 font-inter gradienttext dark:bg-gradient-to-r  from-fuchsia-400 to-[#251729]">
                  A bit about Me.
                </span>
                <div className="floating-element"></div>
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
                based in Lagos, Nigeria. I specialize in creating attractive and
                user-friendly web interfaces, focusing on responsive design and
                clean code.I am Passionate about technology and constantly
                learning. I am committed to building engaging and efficient
                digital experiences. I&apos;m a team player, and i always strive
                to help my team memebers.
                <br></br>
                <br></br>
                <div className="floating-element"></div>
                <i className="font-semibold">
                  {" "}
                  Feel free to reach out to me ;)
                </i>
                <br></br>
                {/* <Link href="#section4">
                <>
                  <button className="contactmebutton   mt-5  font-medium animate-bounce">
                    Contact me
                  </button>
                </>
              </Link> */}
                {/* <Link
                href={Resume}
                className="contactmebutton font-medium w-fit mt-[4rem]"
              >
                Download Resume
              </Link> */}
                <a
                  href="/Aiwerioghene Adesuwa Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactmebutton mt-5 font-medium animate-bounce"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <Tools />
          <ScrollTools />
          <Services />
        </div>
      </section>
    </motion.div>
  );
};

export default About;
