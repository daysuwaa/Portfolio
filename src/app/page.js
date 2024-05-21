"use client";
import Navbar from "./components/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Home from "./home/page";
import Link from "next/link";
import { ReactTyped as Typed } from "react-typed"; // Update the import statement
export default function Homee() {
  return (
    <main>
      <Navbar />

      <div className="text-start mx-[2rem] sm:mx-[4rem]  md:mx-[6rem] lg:mx-[10rem] xl:mx-[14rem] py-[13rem] md:py-[5rem]">
        <p className=" comic-font text-lg">Hi, my name is</p>
        <p className=" text-4xl  sm:text-6xl border-l-8 px-2  text-rose-500 zeyada-font mt-5">
          Aiwerioghene Adesuwa.
        </p>
        <div className="mt-6">
          <Typed
            className="lg:text-6xl  text-2xl sm:text-4xl md:text-5xl  rampart-font  shadowshadow-lg shadow-rose-500"
            strings={["Front End Developer", "Welcome to my Portfolio :)"]}
            typeSpeed={120}
            backSpeed={100}
            loop
          />
        </div>
        <Link
          href="/about"
          className="flex items-center rainbow-1  justify-center  text-white p-2 hover:underline border-[1px] rounded border-rose-500 mt-5 w-[13rem] "
        >
          <p className="comic-font text-sm">Check me out </p>
          <IoIosArrowRoundForward className="w-9 h-9 bounce cursor-pointer " />
        </Link>
      </div>
    </main>
  );
}
