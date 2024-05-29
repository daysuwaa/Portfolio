import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Contactme = () => {
  return (
    <div className="flex mt-5 gap-4 items-center cursor-pointer">
      <Link
        href="https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268/"
        className=" w-fit"
      >
        <CiLinkedin className="w-[2rem]  h-[2rem]" />
      </Link>
      <Link href="https://x.com/daysuwaa_a" className="w-fit">
        <FaXTwitter className="w-[1.5rem]  h-[1.5rem]" />
      </Link>
    </div>
  );
};

export default Contactme;
