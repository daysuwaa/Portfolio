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
  status,
  featured,
}) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case "completed":
        return {
          icon: <FaCheckCircle className="w-3 h-3" />,
          text: "Completed",
          bgColor: "bg-green-100 dark:bg-green-900/30",
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
          <div className="flex items-center gap-3">
            {linksrc && (
              <Link href={linksrc} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Live Demo
                </button>
              </Link>
            )}

            {gitsrc && (
              <Link href={gitsrc} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#232323] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-200 dark:border-gray-600">
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
    title: "Asos Clone",
    description:
      "A pixel-perfect e-commerce clone featuring modern UI/UX, responsive design, and interactive shopping experience with cart functionality and product filtering.",
    linksrc: "https://daysuwaa.github.io/Asos-Clone-/",
    gitsrc: "https://github.com/daysuwaa/Asos-Clone-",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    status: "completed",
    featured: true,
  },
  {
    imageSrc: bank,
    title: "Bank Website",
    description:
      "A modern banking application website featuring clean design, responsive layout, and intuitive user interface built with React and Tailwind CSS.",
    linksrc: "https://daysuwaa.github.io/Bank-Website/",
    gitsrc: "https://github.com/daysuwaa/Bank-Website",
    stack: ["React.js", "Tailwind CSS", "JavaScript"],
    status: "completed",
  },
  {
    imageSrc: bulkpayment,
    title: "Bulk Payment Landing",
    description:
      "A professional landing page showcasing expertise in creating visually appealing and user-friendly web interfaces with modern design principles.",
    linksrc: "https://bulkpayment-landingpage.vercel.app",
    gitsrc: "https://github.com/daysuwaa/BulkTransfer-landingpage",
    stack: ["React.js", "Tailwind CSS", "Responsive Design"],
    status: "completed",
  },
  {
    imageSrc: codestash,
    title: "CodeStash",
    description:
      "A comprehensive code snippet management tool built with the MERN stack, featuring syntax highlighting, tagging, and search functionality for developers.",
    linksrc: "https://codestashh.vercel.app/login",
    gitsrc: "https://github.com/daysuwaa/CodestashFe",
    stack: ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js"],
    status: "completed",
    featured: true,
  },

  {
    imageSrc: stockmate,
    title: "Stock Mate",
    description:
      "A simple, elegant inventory management web app that helps small business owners (like hair vendors or boutique sellers) track their products.",
    linksrc: "",
    gitsrc: "https://github.com/daysuwaa/stockmate",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "in-progress",
  },
  {
    imageSrc: usign,
    title: "uSign",
    description:
      "A simple PDF signing app that lets users upload, preview, sign, and download documents without hassle.",
    linksrc: "",
    gitsrc: "https://github.com/Kwurah/usign",
    stack: ["TypeScript", "Tailwind CSS", "Framer Motion", "PDF API"],
    status: "in-progress",
  },

  {
    imageSrc: uber,
    title: "Uber Clone",
    description:
      "Built an Uber clone replicating its core functionality and user interface for learning purposes, focusing on responsive design and user experience.",
    linksrc: "https://daysuwaa.github.io/Uber-clone/",
    gitsrc: "https://github.com/daysuwaa/Uber-clone",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    status: "completed",
  },
  {
    imageSrc: giftloop,
    title: "Gift Loop",
    description:
      "GiftLoop helps you track gift ideas, remember special dates, and always stay thoughtful with an intuitive interface and reminder system.",
    linksrc: "",
    gitsrc: "https://github.com/daysuwaa/giftloop",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "in-progress",
  },
  {
    imageSrc: vans,
    title: "Vans Website Clone",
    description:
      "Replicated the Vans official website, duplicating its user interface and design patterns for self-improvement and learning purposes.",
    linksrc: "https://daysuwaa.github.io/Vans-Website-Clone/",
    gitsrc: "https://github.com/daysuwaa/Vans-Website-Clone",
    stack: ["HTML", "CSS", "Bootstrap"],
    status: "completed",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const showNextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getDisplayedProjects = () => {
    const mainProject = projectData[currentIndex];
    const prevIndex =
      (currentIndex - 1 + projectData.length) % projectData.length;
    const nextIndex = (currentIndex + 1) % projectData.length;
    const prevProject = projectData[prevIndex];
    const nextProject = projectData[nextIndex];

    return { mainProject, prevProject, nextProject };
  };

  const { mainProject, prevProject, nextProject } = getDisplayedProjects();

  return (
    <div
      id="section4"
      className="hidden lg:flex flex-col items-center justify-center w-full min-h-screen py-20"
    >
      <div className=" px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl pompiere-font font-inter dark:text-white text-black mb-4">
              Featured Projects 💻
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A curated showcase of my recent work, featuring modern{" "}
            <span className="text-rose-500 font-semibold">
              web applications
            </span>{" "}
            built with cutting-edge technologies and best practices in UI/UX
            design.
          </p>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-rose-500">
              {projectData.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {projectData.filter((p) => p.status === "in-progress").length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              In Progress
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">
              {projectData.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Projects
            </div>
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          {/* Previous Button */}
          <button
            onClick={showPrevProject}
            className="p-3 bg-white dark:bg-gray-800 shadow-lg rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-600 group"
          >
            <FaArrowLeft className="text-rose-500 w-5 h-5 group-hover:text-rose-600 transition-colors duration-300" />
          </button>

          {/* Projects Display */}
          <div className="flex gap-8 justify-center items-center">
            <div className="w-80">
              <ProjectsDisplay
                key={`prev-${
                  (currentIndex - 1 + projectData.length) % projectData.length
                }`}
                imageSrc={prevProject.imageSrc}
                title={prevProject.title}
                description={prevProject.description}
                linksrc={prevProject.linksrc}
                gitsrc={prevProject.gitsrc}
                stack={prevProject.stack}
                status={prevProject.status}
                featured={prevProject.featured}
                isMain={false}
              />
            </div>

            <div className="w-96">
              <ProjectsDisplay
                key={`main-${currentIndex}`}
                imageSrc={mainProject.imageSrc}
                title={mainProject.title}
                description={mainProject.description}
                linksrc={mainProject.linksrc}
                gitsrc={mainProject.gitsrc}
                stack={mainProject.stack}
                status={mainProject.status}
                featured={mainProject.featured}
                isMain={true}
              />
            </div>

            <div className="w-80">
              <ProjectsDisplay
                key={`next-${(currentIndex + 1) % projectData.length}`}
                imageSrc={nextProject.imageSrc}
                title={nextProject.title}
                description={nextProject.description}
                linksrc={nextProject.linksrc}
                gitsrc={nextProject.gitsrc}
                stack={nextProject.stack}
                status={nextProject.status}
                featured={nextProject.featured}
                isMain={false}
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={showNextProject}
            className="p-3 bg-white dark:bg-gray-800 shadow-lg rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-600 group"
          >
            <FaArrowRight className="text-rose-500 w-5 h-5 group-hover:text-rose-600 transition-colors duration-300" />
          </button>
        </motion.div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-rose-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-rose-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
