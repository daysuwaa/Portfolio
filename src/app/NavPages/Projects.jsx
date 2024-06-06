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
    <div>
      <div className=" bg-gray-100 dark:bg-[#0a0a0a] h-full  border-dashed border-zinc-600 border-[0.2px] p-5 rounded-sm">
        <div className="flex items-center mb-5">
          <h1 className=" text-[20px] roboto-font font-medium">{title}</h1>
          <div className="flex ml-auto gap-4">
            <Link href={linksrc}>
              <FaExternalLinkAlt className="w-5 h-5" />
            </Link>

            <Link href={gitsrc}>
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className=" border-l-4 border-[#f4426b] ">
          <p className="text-[13px] dark:text-gray-300 font-inter ml-2">
            {description}
          </p>
        </div>
        <hr className="mt-6 mb-4  border-[#282828]"></hr>
        <p className="text-[13px] font-inter">Technologies: {technology}</p>
        <hr className="my-4  border-[#282828]"></hr>
        <Image src={imageSrc} alt="image" />
      </div>
    </div>
  );
};

const projectData = [
  {
    imageSrc: Asos,
    title: "Asos-clone",
    description:
      "Constructed an ASOS clone, replicating its user interface for learning purposes. ",
    technology: "HTML, CSS & Bootstrap",
    linksrc: "https://github.com/daysuwaa/Asos-Clone-",
    gitsrc: "https://daysuwaa.github.io/Asos-Clone-/",
  },
  {
    imageSrc: bank,
    title: "Bank website",
    description:
      "This is a website for a banking application, built using React js and Tailwind CSS.",
    technology: "React JS and Tailwind CSS",
    linksrc: "hjkm",
    gitsrc: "fgbjnkm,",
  },
  {
    imageSrc: chevron,
    title: "Chevron",
    description:
      "Developed a UI featuring a dashboard designed for initiating and managing bulk payments",
    technology: "React Js and Tailwind Css",
    linksrc: "hjkm",
    gitsrc: "fgbjnkm,",
  },
  {
    imageSrc: codestash,
    title: "Codestash",
    description: "codestash",
    technology: "klm,;",
    linksrc: "hjkm",
    gitsrc: "fgbjnkm,",
  },
  {
    imageSrc: Linklocker,
    title: "Linklocker",
    description: "linklocker",
    technology: "klm,;",
    linksrc: "hjkm",
    gitsrc: "fgbjnkm,",
  },
  {
    imageSrc: uber,
    title: "Uber",
    description: "uber",
    technology: "klm,;",
    linksrc: "hjkm",
    gitsrc: "fgbjnkm,",
  },
  {
    imageSrc: vans,
    title: "Vans",
    description: "vans",
    technology: "klm,;",
    linksrc: "hjkm",
    gitsrc: "fgbjnkm,",
  },
];

const Projects = () => {
  return (
    <div id="section3" className="my-[3.5rem]">
      <div>
        <h1 className="text-3xl pompiere-font">
          -
          <span className=" mx-3 font-inter  gradienttext dark:bg-gradient-to-r  from-pink-700 to-[#251729]">
            Projects
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
              technology={project.technology}
              linksrc={project.linksrc}
              gitsrc={project.gitsrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
