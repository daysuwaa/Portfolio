import React from "react";
import Navbar from "./Navbar";
import Me from "../../../public/me.png";
import Image from "next/image";
import Tools from "./Tools";

const About = () => {
  return (
    <div className="#section2">
      <div className="inter-font  grid md:grid-cols-2 gap-4 mx-[3rem]">
        <div className="">
          <h4 className="text-4xl tracking-widest text-rose-100 font-semibold leading-[4rem] uppercase">
            Get to know DAYSUWA
          </h4>

          <div className="text-[16px] font-light ">
            <div
              className=" p-8 shadow-md shadow-[#6ba2a7] rounded-md"
              style={{ backgroundColor: "rgba(205, 208, 230, 0.5)" }}
            >
              Hello, my name is Aiwerioghene Adesuwa, but I go by{" "}
              <span className="text-rose-500 font-bold italic">Daysuwaa</span>{" "}
              on social media platforms.
              <p>
                As a{" "}
                <span className="text-rose-500 italic font-bold">
                  Front-end developer
                </span>{" "}
                with a creative flair, I blend coding skills with a passion for
                crafting visually appealing and user-friendly interfaces.
              </p>
              <br></br>
              <p>
                I believe in the power of collaboration and I am always eager to
                learn from others and share my knowledge.{" "}
                <p className="italic text-rose-500 font-bold">
                  Let&apos;s connect and create something amazing together!
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto mx-9">
          <Image
            src={Me}
            alt="me"
            className="w-[23rem] hidden md:block h-[23rem] rounded-full shadow-lg shadow-gray-500"
          />
        </div>
        <Tools />
      </div>
    </div>
  );
};

export default About;
