import React from "react";
import {
  AwardIcon,
  Brain,
  Code,
  Heart,
  Lightbulb,
  Smartphone,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { MdDeviceHub } from "react-icons/md";

const features = [
  {
    icon: (
      <User className="text-blue-500 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Team Player",
    desc: "I thrive in collaborative environments and love helping others grow.",
  },
  {
    icon: (
      <Lightbulb className="text-yellow-400 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Creative Problem Solving",
    desc: "Innovative solutions for complex challenges.",
  },
  {
    icon: (
      <Code className="text-green-500 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Clean Code",
    desc: "I write code that’s easy to read, scale, and hand off.",
  },
  {
    icon: (
      <Heart className="text-red-500 w-6 h-6 animate-pulse group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "User-Centered Approach",
    desc: "Always prioritizing user experience and accessibility",
  },
  {
    icon: (
      <Brain className="text-orange-500 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Fast Learner",
    desc: "I pick up tools, frameworks, and concepts quickly.",
  },
  {
    icon: (
      <Smartphone className="text-purple-500 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Responsive Design",
    desc: "I ensure that websites look great and function properly across different screen sizes",
  },
];

const Bring = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
    >
      <div className="rounded-xl shadow-lg dark:shadow-lg p-8 bg-gradient-to-tr from-white via-rose-50 to-white dark:from-black dark:via-[#1c1c1c] dark:to-black text-black dark:text-white transition-colors duration-500">
        <h1 className="flex items-center pompiere-font  text-3xl font-bold ">
          <AwardIcon className="w-8 h-8 text-yellow-400 mr-3 animate-bounce" />
          What I Bring
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r my-3 text-start from-rose-400 to-pink-400 mx-12 rounded-full"></div>

        <div className="space-y-6 mt-6">
          {features.map((item, i) => (
            <div
              key={i}
              className={`group transition duration-500 ease-out transform opacity-0 animate-fadeInUp delay-${
                i * 100
              }`}
            >
              <div className="flex items-center gap-3 leading-[40px]">
                {item.icon}
                <h2 className="text-md font-semibold group-hover:text-rose-500 transition-colors duration-300">
                  {item.title}
                </h2>
              </div>
              <p className="ml-9 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Bring;
