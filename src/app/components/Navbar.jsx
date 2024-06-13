import Image from "next/image";
import React from "react";
import Logo1 from "../../../public/logo/logow.svg";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Logoo from "./Logoo";

const Navbar = () => {
  return (
    <div className="my-[2rem] mx-[2rem] md:mx-[5rem] tracking-wider roboto-font flex items-center justify-between">
      {/* <Logoo /> */}
      <p className="gwendolyn-font text-4xl">D!</p>
      <nav>
        <ul className="flex gap-6 font-semibold">
          <Link href="#section1" className="nav-link-ltr nav-link">
            Home
          </Link>
          <Link href="#section2" className="nav-link-ltr nav-link">
            About
          </Link>
          <Link href="#section3" className="nav-link-ltr nav-link">
            Project
          </Link>
          <Link href="#section4" className="nav-link-ltr nav-link">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
