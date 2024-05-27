import Image from "next/image";
import React from "react";
import Asos from "../public/projects/asos.png";
import bank from "../public/projects/bank.png";
import chevron from "../public/projects/chevron.png";
import codestash from "../public/projects/codestash.png";
import Linklocker from "../public/projects/linklocker.png";
import uber from "../public/projects/uber.png";
import vans from "../public/projects/vans.png";
const ProjectsDisplay = ({ image, title, description }) => {
  return (
    <div>
      <div className="bg-red-500 p-5">
        <Image src={image} alt="image" className="w-[50%] h-[50%]" />
        <h1 className="hover:last:inset-1.5">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
const Projects = () => {
  return (
    <div id="section3" className="my-[3.5rem]">
      <div>
        <h1 className="text-3xl ">
          -
          <span className=" mx-3 font-inter pompiere-font gradienttextblack">
            Projects
          </span>
        </h1>
        <p className="leading-8 text-[12px] font-medium">
          Below are a selection of completed projects I&apos;ve meticulously
          crafted from the ground up. They have attractive designs and
          easy-to-use layouts. The code is well-organized, making it simple to
          maintain and reuse. These projects are to showcase my commitment to
          responsive design.{" "}
        </p>
        <div className="grid grid-cols-2 gap-5">
          <ProjectsDisplay
            image={Asos}
            alt="asos"
            title="asos"
            description="asos"
          />
          <ProjectsDisplay
            image={vans}
            alt="asos"
            title="asos"
            description="asos"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
