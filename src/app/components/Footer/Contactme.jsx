import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const Contactme = () => {
  return (
    <div className="flex mt-5 gap-4 justify-center items-center cursor-pointer">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268/"
        className=" w-fit"
      >
        <CiLinkedin className=" h-8 w-8 hover:text-slate-400" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://x.com/daysuwaa_a"
        className="w-fit"
      >
        <FaXTwitter className=" h-8 w-8 hover:text-slate-400" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:adesuwaaiwerioghene12@gmail.com"
        className="w-fit"
      >
        <MdOutlineMail className=" h-8 w-8 hover:text-slate-400" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/daysuwaa"
        className="w-fit"
      >
        <FaGithub className="h-8 w-8  hover:text-slate-400" />
      </Link>
    </div>
  );
};

export default Contactme;
