import Image from "next/image";
import React, { useState } from "react";
import Asos from "../../../public/projects/asos.png";
import bank from "../../../public/projects/bank.png";
import chevron from "../../../public/projects/chevron.png";
import codestash from "../../../public/projects/codestash.png";
import bulkpayment from "../../../public/projects/bulkpayment.png";
import uber from "../../../public/projects/uber.png";
import vans from "../../../public/projects/vans.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const ProjectsDisplay = ({
  imageSrc,
  title,
  description,
  linksrc,
  gitsrc,
  technology,
}) => {
  return (
    <div className=" duration-500 transform block md:hidden hover:scale-105 hover:shadow-md hover:shadow-black bg-gray-100 dark:bg-[#0a0a0a] h-full border-dashed border-zinc-600 border-[0.2px] p-5 rounded-sm">
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
    imageSrc: chevron,
    title: "Chevron",
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
    imageSrc: bulkpayment,
    title: "Landing page",
    description:
      " Development of a landing page, showcasing my expertise in creating visually appealing and user-friendly web interfaces.",

    linksrc: "#",
    gitsrc: "https://github.com/daysuwaa/BulkTransfer-landingpage",
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
    <div id="section3" className=" block md:hidden my-[3.5rem]">
      <div>
        <h1 className="text-3xl text-center pompiere-font">
          -{" "}
          <span className="mx-3 font-inter gradienttext dark:bg-gradient-to-r from-fuchsia-400 to-[#251729]">
            Projects.
          </span>
        </h1>
        <p className="leading-8 mt-7 text-center text-[13px] font-medium">
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
            onClick={prevProject}
            className="p-2.5  bg-slate-200 rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
          >
            <FaArrowLeft className="text-fuchsia-500" />
          </button>
          <div className="w-full mx-4">
            <ProjectsDisplay
              imageSrc={currentProject.imageSrc}
              title={currentProject.title}
              description={currentProject.description}
              technology={currentProject.technology}
              linksrc={currentProject.linksrc}
              gitsrc={currentProject.gitsrc}
            />
          </div>
          <button
            onClick={nextProject}
            className="p-2.5 bg-slate-200  rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
          >
            <FaArrowRight className="text-fuchsia-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectssm;
