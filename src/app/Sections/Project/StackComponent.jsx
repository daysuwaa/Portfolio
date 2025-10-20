"use client";

import Image from "next/image";
import React from "react";
import { IoCodeOutline } from "react-icons/io5";
import { SiMaterialdesign } from "react-icons/si";
import { PiDevicesLight } from "react-icons/pi";
import { IoIosGitBranch } from "react-icons/io";
import { MdOutlineDevices } from "react-icons/md";

const StackComponent = ({ image, title, description, stack = [] }) => {
  // color mapping for stacks
  const stackMap = {
    "react.js": { color: "text-emerald-600", bg: "bg-emerald-100" },
    "next.js": { color: "text-amber-600", bg: "bg-amber-100" },
    "tailwind css": { color: "text-blue-600", bg: "bg-blue-100" },
    html: { color: "text-green-600", bg: "bg-green-50" },
    css: { color: "text-indigo-600", bg: "bg-indigo-50" },
    framermotion: { color: "text-purple-600", bg: "bg-purple-50" },
    javascript: { color: "text-yellow-600", bg: "bg-yellow-50" },
    "responsive design": { color: "text-pink-600", bg: "bg-pink-100" },
    "express.js": { color: "text-teal-600", bg: "bg-teal-100" },
    mongodb: { color: "text-orange-600", bg: "bg-orange-100" },
    postgresql: { color: "text-slate-600", bg: "bg-slate-50" },
    csharp: { color: "text-indigo-600", bg: "bg-indigo-50" },
    "node.js": { color: "text-red-600", bg: "bg-red-300" },
    typescript: { color: "text-purple-600", bg: "bg-purple-200" },
    "framer motion": { color: "text-slate-100", bg: "bg-[#978484]" },
    prisma: { color: "text-sky-600", bg: "bg-sky-200" },
    postgresql: { color: "text-fuchsia-600", bg: "bg-fuchsia-300" },
    "redux toolkit": { color: "text-indigo-600", bg: "bg-indigo-300" },
    fastapi: { color: "text-blue-300", bg: "bg-[#305790]" },
    ".net": { color: "text-green-600", bg: "bg-[#96be96]" },
  };

  return (
    <div className="">
      {/* Stack tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {stack.map((item, index) => {
          const style = stackMap[item.toLowerCase()] || {
            color: "text-gray-700",
            bg: "bg-gray-100",
          };
          return (
            <span
              key={index}
              className={`${style.color} ${style.bg}  text-xs font-medium px-2 py-1.5 rounded-md capitalize`}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StackComponent;
