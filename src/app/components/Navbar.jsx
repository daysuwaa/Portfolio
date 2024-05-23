import Image from "next/image";
import React from "react";
import Logo1 from "../../../public/logo/logo2.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex m-[2rem] sm:m-[4rem] items-center inter-font cursor-pointer">
      <Image src={Logo1} alt="logo" className="w-[8rem] h-[5rem] mr-auto" />
      <nav>
        <ul className="flex  items-center gap-6">
          <Link href="#section1" className="nav-link nav-link-ltr">
            Home
          </Link>

          <Link href="#section2" className="nav-link nav-link-ltr">
            About
          </Link>
          <Link href="#section3" className="nav-link nav-link-ltr">
            Projects
          </Link>
          <Link href="#section4" className="nav-link nav-link-ltr">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
