import Image from "next/image";
import React, { useState } from "react";
import Asos from "../../../public/projects/asos.png";
import bank from "../../../public/projects/bank.png";
import chevron from "../../../public/projects/chevron.png";
import codestash from "../../../public/projects/codestash.png";
import bulkpayment from "../../../public/projects/bulkpayment.png";
import usign from "../../../public/projects/usign.png";
import uber from "../../../public/projects/uber.png";
import vans from "../../../public/projects/vans.png";
import giftloop from "../../../public/projects/Giftloop.png";
import stockmate from "../../../public/projects/stockmate.png";
import {
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
const ProjectsDisplay = ({
  imageSrc,
  title,
  description,
  linksrc,
  gitsrc,
  isMain,
  stack,
  featured,
  status,
}) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case "completed":
        return {
          icon: <FaCheckCircle className="w-3 h-3" />,
          text: "Completed",
          bgColor: "bg-green-100 dark:bg-green-900",
          textColor: "text-green-600 dark:text-green-400",
          borderColor: "border-green-200 dark:border-green-700",
        };
      case "in-progress":
        return {
          icon: <FaClock className="w-3 h-3" />,
          text: "In Progress",
          bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
          textColor: "text-yellow-600 dark:text-yellow-400",
          borderColor: "border-yellow-200 dark:border-yellow-700",
        };
      default:
        return {
          icon: <FaCheckCircle className="w-3 h-3" />,
          text: "Completed",
          bgColor: "bg-green-100 dark:bg-green-900/30",
          textColor: "text-green-600 dark:text-green-400",
          borderColor: "border-green-200 dark:border-green-700",
        };
    }
  };
  const statusConfig = getStatusConfig(status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
      className={`relative ${
        isMain ? "scale-100 opacity-100" : "scale-75 hover:scale-90 opacity-50"
      } duration-500 transform hover:scale-105 hover:opacity-100`}
    >
      <div className="bg-white dark:bg-[#0a0a0a] h-full shadow-xl dark:shadow-[#272727] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 group">
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-2 py-1 rounded-full text-[10px] font-medium shadow-lg">
            Featured
          </div>
        )}

        {/* Status Badge */}
        <div
          className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}
        >
          {statusConfig.icon}
          <span>{statusConfig.text}</span>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} image`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-lg roboto-font font-semibold text-gray-900 dark:text-white group-hover:text-rose-500 transition-colors duration-300">
              {title}
            </h1>
          </div>

          <p className="text-sm inter-font leading-relaxed text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          {stack && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {stack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/20 dark:hover:text-rose-400 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid gap-3">
            {linksrc && (
              <Link href={linksrc} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 w-full justify-center  bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Live Demo
                </button>
              </Link>
            )}

            {gitsrc && (
              <Link href={gitsrc} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center w-full gap-2 bg-gray-100 dark:bg-[#232323] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-200 dark:border-gray-600">
                  <FaGithub className="w-4 h-4" />
                  Code
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const projectData = [
  {
    imageSrc: Asos,
    title: "Asos-clone",
    description:
      "A pixel-perfect e-commerce clone featuring modern Ul/UX, responsive design, and interactive shopping experience.",
    linksrc: "https://daysuwaa.github.io/Asos-Clone-/",
    gitsrc: "https://github.com/daysuwaa/Asos-Clone-",
    stack: ["React.js", "Tailwind CSS"],
  },
  {
    imageSrc: bank,
    title: "Bank website",
    description:
      "This is a website for a banking application, built using React js and Tailwind CSS.",

    linksrc: "https://daysuwaa.github.io/Bank-Website/",
    gitsrc: "https://github.com/daysuwaa/Bank-Website",
    stack: ["React", "Tailwind CSS"],
  },
  {
    imageSrc: bulkpayment,
    title: "Bulk payment Landing page",
    description:
      " Development of a landing page, showcasing my expertise in creating visually appealing and user-friendly web interfaces.",

    linksrc: "https://bulkpayment-landingpage.vercel.app",
    gitsrc: "https://github.com/daysuwaa/BulkTransfer-landingpage",
    stack: ["React.js", "Tailwind CSS"],
  },
  {
    imageSrc: chevron,
    title: "Bulk Billerpro Dashboard",
    description:
      "Developed a UI featuring a dashboard designed for initiating and managing bulk payments",

    linksrc: "#",
    gitsrc: "https://github.com/daysuwaa/Billerpro-dashboard",
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    imageSrc: codestash,
    title: "Codestash",
    description:
      "a simple tool used to store your code snippets built using the MERN stack",

    linksrc: "https://codestashh.vercel.app/login",
    gitsrc: "https://github.com/daysuwaa/CodestashFe",
    stack: ["React.js", "Tailwind CSS", "Mongo DB", "Express js"],
  },

  {
    imageSrc: giftloop,
    title: "Gift Loop",
    description:
      "GiftLoop helps you track gift ideas, remember special dates, and always stay thoughtful",

    linksrc: "",
    gitsrc: "https://github.com/daysuwaa/giftloop",
    stack: ["Next.js", "Typescript ", "Tailwind CSS", "Framer Motion"],
  },

  {
    imageSrc: uber,
    title: "Uber",
    description:
      "Built an Uber clone, replicating its e-commerce functionality for practice.",

    linksrc: "https://daysuwaa.github.io/Uber-clone/",
    gitsrc: "https://github.com/daysuwaa/Uber-clone",
    stack: ["HTML", "CSS", "Bootstrap"],
  },
  {
    imageSrc: usign,
    title: "uSign",
    description:
      " An application that enables users to digitally sign PDF documents by drawing or uploading their signature, visually placing it on the document.",

    linksrc: "",
    gitsrc: "https://github.com/Kwurah/usign",
    stack: ["Typescript", "Tailwind CSS", "Framer motion", "API"],
  },
  {
    imageSrc: vans,
    title: "Vans",
    description:
      "Replicated the Vans site, duplicating its user interface for self-improvement purposes.",

    linksrc: "https://daysuwaa.github.io/Vans-Website-Clone/",
    gitsrc: "https://github.com/daysuwaa/Vans-Website-Clone",
    stack: ["HTML", "CSS", "Bootstrap"],
  },
];
const Projectssm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projectData[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
    >
      <div id="section3" className=" block md:hidden my-[3.5rem]">
        <div>
          <div className="text-center mb-8">
            <h2 className="text-4xl pompiere-font font-inter dark:text-white text-black mb-4">
              Featured Projects 💻
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          <p className="leading-8  text-[14px] lg:text-[16px] text-center font-medium">
            A curated showcase of my recent work, featuring modern{" "}
            <span className="text-rose-500">web applications</span> built with
            built with cutting-edge technologies and best practices in UI/UX
            design.
          </p>
          <div className="flex items-center justify-center mt-7">
            <button
              onClick={prevProject}
              className="p-2.5 bg-white shadow-lg  rounded-full hover:bg-gray-200 dark:bg-black dark:shadow-gray-900 dark:hover:bg-gray-950"
            >
              <FaArrowLeft className="text-rose-500" />
            </button>
            <div className="w-full mx-4">
              <ProjectsDisplay
                imageSrc={currentProject.imageSrc}
                title={currentProject.title}
                description={currentProject.description}
                linksrc={currentProject.linksrc}
                gitsrc={currentProject.gitsrc}
                stack={currentProject.stack}
              />
            </div>
            <button
              onClick={nextProject}
              className="p-2.5 bg-white shadow-lg  rounded-full hover:bg-gray-200 dark:bg-black dark:shadow-gray-900 dark:hover:bg-gray-950"
            >
              <FaArrowRight className="text-rose-500" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projectssm;
