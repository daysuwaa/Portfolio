import Image from "next/image";
import React from "react";
import { IoCodeOutline } from "react-icons/io5";
import { SiMaterialdesign } from "react-icons/si";
import { PiDevicesLight } from "react-icons/pi";
import { IoIosGitBranch } from "react-icons/io";
import { MdOutlineDevices } from "react-icons/md";

const ServicesComponent = ({ image, title, description }) => {
  return (
    <div className="shadow-[#868686] bg-gray-100 dark:bg-black dark:border-t  border-[#262626] shadow-md boxshadow">
      <div className="m-7">
        <div className="text-4xl my-6 bg-rose-500 rounded-full w-max p-3 text-center justify-center flex">
          {image}
        </div>
        <h1 className="font-medium text-2xl pompiere-font mb-6">{title}</h1>
        <p className="text-[12px]  leading-7">{description}</p>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <div>
      <h1 className="text-3xl pompiere-font mt-[3.5rem]">
        -
        <span className=" mx-3 font-inter gradienttext dark:bg-gradient-to-r  from-pink-700 to-[#000000]">
          Services.
        </span>
      </h1>
      <div className="grid md:grid-cols-3 mt-7 gap-6">
        <ServicesComponent
          image={<IoCodeOutline />}
          title="Web Development"
          description="I craft visually appealing, user-friendly websites with a focus on responsive design to ensure seamless performance across all devices."
        />
        <ServicesComponent
          image={<PiDevicesLight />}
          title="Responsive Web Designs"
          description="I ensure that websites look great and function properly across different devices and screen sizes, from desktops to tablets and smartphones."
        />
        <ServicesComponent
          image={<IoIosGitBranch />}
          title="Version Control/ Git"
          description="Managing and tracking changes to the codebase, allowing for collaborative work among multiple developers."
        />
      </div>
    </div>
  );
};

export default Services;
