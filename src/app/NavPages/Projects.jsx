import Image from "next/image";
import React from "react";
import Asos from "../../../public/projects/asos.png";
import bank from "../../../public/projects/bank.png";
import chevron from "../../../public/projects/chevron.png";
import codestash from "../../../public/projects/codestash.png";
import Linklocker from "../../../public/projects/linklocker.png";
import uber from "../../../public/projects/uber.png";
import vans from "../../../public/projects/vans.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectsDisplay = ({ imageSrc, title, description }) => {
  return (
    <div>
      <div className="bg-gray-600 p-5">
        <Image src={imageSrc} alt="image" className="" />
        <h1 className="hover:last:inset-1.5">{title}</h1>
        <p>{description}</p>
        <div className="flex items-center">
          <FaExternalLinkAlt />
          <FaGithub className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

const projectData = [
  {
    imageSrc: Asos,
    title: "Asos",
    description: "asos",
  },
  {
    imageSrc: bank,
    title: "Bank",
    description: "bank",
  },
  {
    imageSrc: chevron,
    title: "Chevron",
    description: "chevron",
  },
  {
    imageSrc: codestash,
    title: "Codestash",
    description: "codestash",
  },
  {
    imageSrc: Linklocker,
    title: "Linklocker",
    description: "linklocker",
  },
  {
    imageSrc: uber,
    title: "Uber",
    description: "uber",
  },
  {
    imageSrc: vans,
    title: "Vans",
    description: "vans",
  },
];

const Projects = () => {
  return (
    <div id="section3" className="my-[3.5rem]">
      <div>
        <h1 className="text-3xl pompiere-font">
          -
          <span className=" mx-3 font-inter gradienttext dark:bg-gradient-to-r  from-pink-700 to-[#000000]">
            Projectss
          </span>
        </h1>
        <p className="leading-8 mt-7 text-[13px] font-medium">
          Below are a selection of completed projects I&apos;ve meticulously
          crafted from the ground up. They have attractive designs and
          easy-to-use layouts. The code is well-organized, making it simple to
          maintain and reuse. These projects are to showcase my commitment to
          responsive design.{" "}
        </p>
        <div className="grid md:grid-cols-2 mt-7 lg:grid-cols-3 gap-5">
          {projectData.map((project, index) => (
            <ProjectsDisplay
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
