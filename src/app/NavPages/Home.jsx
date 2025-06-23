"use client";
import React from "react";
import Link from "next/link";
import { ReactTyped as Typed } from "react-typed";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section
      id="section1"
      className="relaive min-h-screen flex items-center justify-center text-center"
    >
      {/* Background Pulsing Bubbles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full opacity-60 animate-pulse float-slow delay-1"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-40 animate-pulse float-slow delay-2"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-emerald-500 rounded-full opacity-50 animate-pulse float-slow delay-4"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-purple-600 rounded-full opacity-60 animate-pulse float-slow delay-1"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-amber-300 rounded-full opacity-70 animate-pulse float-slow delay-3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-4">
        <p className="text-gray-400">
          <b className="block bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent sacramento-font text-5xl">
            Hi, I am
          </b>
        </p>
        <p className="text-4xl lg:text-7xl font-semibold uppercase  roboto-font mt-5">
          Aiwerioghene Adesuwa
        </p>
        {/* Typing Animation */}
        <div className="my-6">
          <Typed
            className="text-3xl font-normal roboto-font block bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            strings={["Front End Developer", "Welcome to my Portfolio :)"]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </div>
        {/* Bio */}
        <p className="lg:text-2xl mt-6 text-gray-600 dark:text-gray-300 leading-[42px]">
          Crafting beautiful, responsive web experiences with modern
          technologies.
          <br />
          Based in Lagos, Nigeria 🇳🇬 ✨
        </p>
        {/* Buttons */}
        <div className="lg:flex gap-4 mt-12 lg:mt-24">
          <Link href="#section5">
            <button className="contactmebutton rounded-full dark:shadow-md shadow-md shadow-pink-400 dark:text-white dark:shadow-[#4d4d4d] px-10 lg:px-14 py-4 font-medium mb-6 lg:mb-0">
              📞 Contact Me
            </button>
          </Link>
          <a
            href="/Aiwerioghene AdesuwaResume (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="downloadbutton rounded-full dark:bg-rose-500/80 dark:text-black border-black border-2 px-4 lg:px-10 py-4 font-medium"
          >
            ⤵️ Download Resume
          </a>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;
