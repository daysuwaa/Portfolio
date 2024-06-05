import React from "react";
import Link from "next/link";
import { IoIosArrowRoundDown } from "react-icons/io";
import { ReactTyped as Typed } from "react-typed"; // Update the import statement
const Home = () => {
  return (
    <section id="section1 ">
      <div className="flex-col mt-[-9rem] flex justify-center text-start  min-h-screen  ">
        <p className="text-gray-600">
          <b className="text-rose-500  sacramento-font text-5xl">Hi,</b> I am
        </p>
        <p className="text-4xl lg:text-6xl font-semibold uppercase textsadow roboto-font mt- 5">
          Aiwerioghene Adesuwa
        </p>
        <div className="my-6">
          <Typed
            className="text-2xl font-extrabold roboto-font text-rose-500"
            strings={["Front End Developer 👩🏽‍💻", "Welcome to my Portfolio :)"]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </div>
        {/* <Link href="#section2" className=" rainbow text-white justify-centr">
          <p className="inter-font text-sm">Check me out </p>
          <IoIosArrowRoundDown className="w-9 h-9 bounce cursor-pointer " />
        </Link> */}
      </div>
    </section>
  );
};

export default Home;
