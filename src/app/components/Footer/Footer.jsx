import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Map, MapPin, X } from "lucide-react";
import Contactme from "./Contactme";
const Footer = () => {
  return (
    <div className="my-6">
      <hr className="my-3 border-gray-300 dark:border-gray-900"></hr>

      <Contactme />
      <h1 className="text-center inter-font text-[14px] font-medium my-6">
        &copy;2025 Adesuwa A. Aiwerioghene.
      </h1>
    </div>
  );
};

export default Footer;
