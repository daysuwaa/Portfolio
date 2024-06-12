import Image from "next/image";
import React, { useState } from "react";
import Asos from "../../../public/projects/asos.png";
import bank from "../../../public/projects/bank.png";
import chevron from "../../../public/projects/chevron.png";
import codestash from "../../../public/projects/codestash.png";
import Linklocker from "../../../public/projects/linklocker.png";
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
  technology,
  isMain,
}) => {
  return (
    <div
      className={`transition-transform ${
        isMain ? "scale-100 opacity-100" : "scale-75 opacity-50"
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
            <button className=" border-black dark:border-none dark:bg-[#232323] bg-slate-200  px-3 py-1.5 border-[0.2px] rounded-md text-[12px]">
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
    technology: "HTML",
    linksrc: "https://daysuwaa.github.io/Asos-Clone-/",
    gitsrc: "https://github.com/daysuwaa/Asos-Clone-",
  },
  {
    imageSrc: bank,
    title: "Bank website",
    description:
      "This is a website for a banking application, built using React js and Tailwind CSS.",
    technology: "React JS and Tailwind CSS",
    linksrc: "#",
    gitsrc: "#",
  },
  {
    imageSrc: chevron,
    title: "Chevron",
    description:
      "Developed a UI featuring a dashboard designed for initiating and managing bulk payments",
    technology: "React JS and Tailwind CSS",
    linksrc: "#",
    gitsrc: "#",
  },
  {
    imageSrc: codestash,
    title: "Codestash",
    description: "Codestash project description",
    technology: "React JS, Node.js",
    linksrc: "#",
    gitsrc: "#",
  },
  {
    imageSrc: Linklocker,
    title: "Linklocker",
    description: "Linklocker project description",
    technology: "Next.js, Tailwind CSS",
    linksrc: "#",
    gitsrc: "#",
  },
  {
    imageSrc: uber,
    title: "Uber",
    description: "Uber project description",
    technology: "React Native",
    linksrc: "#",
    gitsrc: "#",
  },
  {
    imageSrc: vans,
    title: "Vans",
    description: "Vans project description",
    technology: "Vue.js, Vuetify",
    linksrc: "#",
    gitsrc: "#",
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
    <div id="section3" className="my-[3.5rem]">
      <div>
        <h1 className="text-3xl pompiere-font">
          -{" "}
          <span className="mx-3 font-inter gradienttext dark:bg-gradient-to-r from-fuchsia-400 to-[#251729]">
            Projects.
          </span>
        </h1>
        <p className="leading-8 mt-7 text-[13px] font-medium">
          Below are a selection of completed projects I&apos;ve meticulously
          crafted from the ground up. They have attractive designs and
          easy-to-use layouts. The code is well-organized, making it simple to
          maintain and reuse. These projects showcase my commitment to
          responsive design.
        </p>
        <div className="flex items-center justify-center mt-7">
          <button
            onClick={showPrevProject}
            className="p-2.5 bg-black  rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
          >
            <FaArrowLeft className="text-fuchsia-500 " />
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
            className="p-2 bg-black rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
          >
            <FaArrowRight className="text-fuchsia-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
