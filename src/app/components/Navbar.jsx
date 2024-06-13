import Image from "next/image";
import React from "react";
import Logo1 from "../../../public/logo/logow.svg";
import Link from "next/link";

import Logoo from "./Logoo";

const Navbar = () => {
  return (
    <div className="my-[2rem] mx-[1rem] md:mx-[5rem] tracking-wider roboto-font flex items-center justify-between">
      {/* <Logoo /> */}
      <p className="gwendolyn-font text-2xl md:text-4xl bg-fuchsia-100 dark:text-black rounded-full px-3 py-2">
        D!
      </p>
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
