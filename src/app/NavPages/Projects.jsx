import Image from "next/image";
import React, { useState } from "react";
import Asos from "../../../public/projects/asos.png";
import bank from "../../../public/projects/bank.png";
import chevron from "../../../public/projects/chevron.png";
import codestash from "../../../public/projects/codestash.png";
import bulkpayment from "../../../public/projects/bulkpayment.png";
import uber from "../../../public/projects/uber.png";
import vans from "../../../public/projects/vans.png";
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const ProjectsDisplay = ({
  imageSrc,
  title,
  description,
  linksrc,
  gitsrc,
  isMain,
}) => {
  return (
    <div
      className={`  transition-transform ${
        isMain ? "scale-100 opacity-100" : "scale-75 hover:scale-90 opacity-50"
      } duration-500 transform hover:scale-105 hover:opacity-100 bg-gray-50 dark:bg-[#0a0a0a] h-full shadow-lg shadow-[#272727] rounded-md`}
    >
      <Image src={imageSrc} alt={`${title} image`} />
      <div className="p-2">
        <h1 className="text-[20px] roboto-font text-center font-medium">
          {title}
        </h1>
        <hr className="w-12 mx-auto bg-fuchsia-500 h-[2px]"></hr>

        <p className="text-[12px] inter-font mt-2 leading-5 text-center dark:text-gray-300 font-inter">
          {description}
        </p>

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
      "Constructed an ASOS clone, replicating its user interface for learning purposes.",
    linksrc: "https://daysuwaa.github.io/Asos-Clone-/",
    gitsrc: "https://github.com/daysuwaa/Asos-Clone-",
  },
  {
    imageSrc: bank,
    title: "Bank website",
    description:
      "This is a website for a banking application, built using React js and Tailwind CSS.",

    linksrc: "https://daysuwaa.github.io/Bank-Website/",
    gitsrc: "https://github.com/daysuwaa/Bank-Website",
  },
  {
    imageSrc: bulkpayment,
    title: "Bulk payment Landing page",
    description:
      " Development of a landing page, showcasing my expertise in creating visually appealing and user-friendly web interfaces.",

    linksrc: "https://bulkpayment-landingpage.vercel.app",
    gitsrc: "https://github.com/daysuwaa/BulkTransfer-landingpage",
  },
  {
    imageSrc: chevron,
    title: "Bulk Billerpro Dashboard",
    description:
      "Developed a UI featuring a dashboard designed for initiating and managing bulk payments",

    linksrc: "#",
    gitsrc: "https://github.com/daysuwaa/Billerpro-dashboard",
  },
  {
    imageSrc: codestash,
    title: "Codestash",
    description:
      "a simple tool used to store your code snippets built using the MERN stack",

    linksrc: "https://codestashh.vercel.app/login",
    gitsrc: "https://github.com/daysuwaa/CodestashFe",
  },

  {
    imageSrc: uber,
    title: "Uber",
    description:
      "Built an Uber clone, replicating its e-commerce functionality for practice.",

    linksrc: "https://daysuwaa.github.io/Uber-clone/",
    gitsrc: "https://github.com/daysuwaa/Uber-clone",
  },
  {
    imageSrc: vans,
    title: "Vans",
    description:
      "Replicated the Vans site, duplicating its user interface for self-improvement purposes.",

    linksrc: "https://daysuwaa.github.io/Vans-Website-Clone/",
    gitsrc: "https://github.com/daysuwaa/Vans-Website-Clone",
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
    <div id="section3" className=" hidden md:block my-[3.5rem]">
      <div>
        <h1 className="text-3xl text-center pompiere-font">
          -{" "}
          <span className="mx-3 font-inter gradienttext dark:bg-gradient-to-r from-fuchsia-400 to-[#251729]">
            Projects.
          </span>
        </h1>
        <p className="leading-8 mt-7 text-[13px] text-center font-medium">
          Below are a selection of completed projects I&apos;ve meticulously
          crafted from the ground up. They have{" "}
          <span className="dark:text-fuchsia-300 text-fuchsia-500 ">
            attractive designs and
          </span>{" "}
          easy-to-use layouts. The code is well-organized, making it simple to
          maintain and reuse. These projects showcase my commitment to
          <span className="dark:text-fuchsia-300 text-fuchsia-500 ">
            {" "}
            responsive design.
          </span>
        </p>
        <div className="flex items-center justify-center mt-7">
          <button
            onClick={showPrevProject}
            className="p-2.5 bg-black  rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
          >
            <FaArrowLeft className="text-fuchsia-300 " />
          </button>
          <div className="flex w-full mx-4 gap-4 justify-center">
            <ProjectsDisplay
              key={(currentIndex - 1 + projectData.length) % projectData.length}
              imageSrc={prevProject.imageSrc}
              title={prevProject.title}
              description={prevProject.description}
              technology={prevProject.technology}
              linksrc={prevProject.linksrc}
              gitsrc={prevProject.gitsrc}
              isMain={false}
            />
            <ProjectsDisplay
              key={currentIndex}
              imageSrc={mainProject.imageSrc}
              title={mainProject.title}
              description={mainProject.description}
              technology={mainProject.technology}
              linksrc={mainProject.linksrc}
              gitsrc={mainProject.gitsrc}
              isMain={true}
            />
            <ProjectsDisplay
              key={(currentIndex + 1) % projectData.length}
              imageSrc={nextProject.imageSrc}
              title={nextProject.title}
              description={nextProject.description}
              technology={nextProject.technology}
              linksrc={nextProject.linksrc}
              gitsrc={nextProject.gitsrc}
              isMain={false}
            />
          </div>
          <button
            onClick={showNextProject}
            className="p-2.5 bg-black  rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
          >
            <FaArrowRight className="text-fuchsia-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
