import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ReactTyped as Typed } from "react-typed"; // Update the import statement
const Home = () => {
  return (
    <div className="#section1">
      <div className="flex-col mt-[-9rem] flex justify-center text-start mx-[1.5rem] sm:mx-[4rem] md:mx-[4rem] lg:mx-[10rem] xl:mx-[12rem] min-h-screen">
        <p className="text-gray-600">
          <b className="text-rose-500  sacramento-font text-5xl">Hi,</b> I am
        </p>
        <p className="text-6xl lg:text-6xl font-semibold uppercase textshadow inter-font mt- 5">
          Aiwerioghene Adesuwa
        </p>
        <div className="my-6">
          <Typed
            className="text-2xl font-extrabold inter-font text-rose-500"
            strings={["Front End Developer 👩🏽‍💻", "Welcome to my Portfolio :)"]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </div>
        <Link href="/about" className=" rainbow text-white justify-centr">
          <p className="inter-font text-sm">Check me out </p>
          <IoIosArrowRoundForward className="w-9 h-9 bounce cursor-pointer " />
        </Link>
      </div>
    </div>
  );
};

export default Home;
