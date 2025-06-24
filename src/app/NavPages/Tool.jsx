import React, { useRef, useState, useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import next from "../assets/nextjs.jpeg";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github.svg";
import vscode from "../assets/vscode.svg";
import vite from "../assets/vite.png";
import Ts from "../assets/typescriptlogo.svg";
import npm from "../assets/npm.png";
import framermotion from "../assets/framermotion.png";
import materialui from "../assets/Materialui.jpg";
import Image from "next/image";
const Tool = () => {
  const techStack = [
    { name: "HTML5", image: html, level: 95 },
    { name: "CSS3", image: css, level: 90 },
    { name: "JavaScript", image: js, level: 85 },
    { name: "React JS", image: react, level: 88 },
    { name: "Tailwind CSS", image: tailwind, level: 98 },
    { name: "Bootstrap", image: bootstrap, level: 78 },
    { name: "Next JS", image: next, level: 80 },
    { name: "TypeScript", image: Ts, level: 70 },
    { name: "Material Ui", image: materialui, level: 75 },
    { name: "NPM", image: npm, level: 85 },
    { name: "Framer motion", image: framermotion, level: 70 },
    { name: "Git", image: git, level: 87 },
    { name: "GitHub", image: github, level: 90 },
    { name: "Vite", image: vite, level: 80 },
    { name: "Vscode", image: vscode, level: 97 },
  ];
  const [skillsInView, setSkillsInView] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setSkillsInView(true);
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (skillsRef.current) {
  //     observer.observe(skillsRef.current);
  //   }

  //   return () => {
  //     if (skillsRef.current) {
  //       observer.unobserve(skillsRef.current);
  //     }
  //   };
  // }, []);
  // const skillsRef = useRef(null);

  const skillsRef = useRef(null); // ✅ Define it first

  useEffect(() => {
    const target = skillsRef.current; // ✅ store it once

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div>
      <section id="section3" className="py-20 relative z-10 bg-transparent">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl pompiere-font font-inter dark:text-white text-black mb-4">
              Skills & Expertise ⚡
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div ref={skillsRef} className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-[#21212150] dark:border-none  rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={30}
                    height={30}
                    className="rounded-sm"
                  />
                  <h3 className="font-semibold text-black dark:text-white">
                    {tech.name}
                  </h3>
                  <div className="flex-1">
                    <div className="text-right text-rose-500 text-sm font-medium">
                      {tech.level}%
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-rose-500 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: skillsInView ? `${tech.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tool;
