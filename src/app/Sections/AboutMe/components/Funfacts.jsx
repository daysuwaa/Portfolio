import React from "react";
import { motion } from "framer-motion";
import {
  AwardIcon,
  Brain,
  Code,
  Heart,
  Music,
  Palette,
  Plane,
  Smile,
  User,
} from "lucide-react";
import { MdSportsSoccer, MdStyle } from "react-icons/md";
import { SiNamemc } from "react-icons/si";
import { CiFootball } from "react-icons/ci";
import { Football } from "react-icons";

const features = [
  {
    icon: (
      <Heart className="text-blue-500 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "What I do when I am not coding",
    desc: "I like to watch movies, play dress up and sleep ",
  },
  {
    icon: (
      <Palette className="text-purple-400 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Big Fan of Aesthetics",
    desc: "I love making things look good, from UIs to how I dress",
  },
  {
    icon: (
      <Music className="text-blue-200 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "I code with Music On",
    desc: "I love listening to Afrobeats or chill lo-fi playing in the background.",
  },
  {
    icon: (
      <Plane className="text-green-500 w-6 h-6  group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "Travel Is My Reset Button",
    desc: "Exploring new places and cultures keeps me refreshed.",
  },
  {
    icon: (
      <User className="text-rose-300 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
    ),
    title: "My Nickname Is Daysuwa",
    desc: "It is basically the pronounciation of my name, but without the 'A' (AH-DAY-SU-WA)",
  },
  {
    icon: (
      <MdSportsSoccer className="text-purple-500 w-6 h-6 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
    ),
    title: "Football Fan",
    desc: "I watch and play football (somtimes). I support the Gunners :)",
  },
];

const Funfacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
    >
      <div className="rounded-xl shadow-lg dark:shadow-lg p-8 bg-gradient-to-tr from-white via-rose-50 to-white dark:from-black dark:via-[#1c1c1c] dark:to-black text-black dark:text-white transition-colors duration-500">
        <h1 className="flex items-center pompiere-font  text-2xl lg:text-3xl font-bold ">
          <Smile className="w-8 h-8 text-yellow-400 mr-3 animate-bounce" />
          Fun facts about me!
        </h1>
        <div className="w-[7rem] h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-[5rem] my-3 rounded-full"></div>
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

export default Funfacts;
