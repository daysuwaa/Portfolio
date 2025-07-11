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
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import giftloop from "../../../public/projects/Giftloop.png";
const ProjectsDisplay = ({
  imageSrc,
  title,
  description,
  linksrc,
  gitsrc,
  isMain,
  stack,
}) => {
  return (
    <div className=" duration-500 transform block md:hidden hover:scale-105 hover:shadow-md hover:shadow-black bg-gray-100 dark:bg-[#0a0a0a] h-full border-dashed border-zinc-600 border-[0.2px] p-5 rounded-sm">
      <Image src={imageSrc} alt={`${title} image`} />
      <div className="p-2">
        <h1 className="text-[20px] roboto-font font-medium">{title}</h1>

        <p className="text-[12px] inter-font mt-2 leading-5 t dark:text-gray-300 font-inter">
          {description}
        </p>
        {stack && (
          <div className="flex flex-wrap gap-2 mt-4">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-medium bg-rose-100 text-rose-600 px-2 py-1 rounded-full dark:bg-[#1f1f1f] dark:text-rose-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-center items-center mx-2 gap-4 my-4">
          <Link href={linksrc} passHref>
            <button className=" border-black hover:bg-slate-300  dark:border-none dark:bg-[#232323] bg-slate-200  px-3 py-1.5 border-[0.2px] rounded-md text-[12px]">
              View Project
            </button>
          </Link>
          <Link href={gitsrc} passHref className="ml-auto">
            <FaGithub className="w-7 h-7 hover:text-blue-900" />
          </Link>
        </div>
      </div>
    </div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl pompiere-font font-inter dark:text-white text-black mb-4">
              Projects 📁
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          <p className="leading-8 mt-7 text-[14px] lg:text-[16px] text-center font-medium">
            A showcase of my recent work, featuring modern{" "}
            <span className="text-rose-500">web applications</span> built with
            cutting-edge technologies and best practices in Ul/UX design.
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
