import Image from "next/image";
import React from "react";
import Logo1 from "../../../public/logo/logo2.png";
import { MdOutlineWbSunny } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex m-[2rem] sm:m-[4rem] items-center comic-font cursor-pointer">
      <Image src={Logo1} alt="logo" className="w-[8rem] h-[5rem] mr-auto" />
      <nav>
        <ul className="flex  items-center gap-6">
          <p>
            <Link href="/home">Home</Link>
          </p>
          <Link href="/about">About</Link>
          <Link href="/project">Projects</Link>
          <Link href="/contacr">Contact</Link>

          <li>
            <MdOutlineWbSunny />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
