import React from "react";
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
import ToolsComponent from "./ToolsComponent";

const Tools = () => {
  return (
    <div className="mt-12 text-center  ">
      <h1 className="text-3xl pompiere-font bg-clip-text text-transparent ">
        -
        <span className="gradienttext dark:bg-gradient-to-r  from-fuchsia-400 to-[#251729] mx-3">
          My Tech stack.
        </span>
      </h1>
      <div className="hidden md:block ">
        <div className="grid grid-cols-3 lg:grid-cols-5  gap-6">
          <ToolsComponent image={html} name="Html 5" />
          <ToolsComponent image={css} name="CSS 3" />
          <ToolsComponent image={js} name="Javascript" />
          <ToolsComponent image={tailwind} name="Tailwind CSS" />
          <ToolsComponent image={react} name="React JS" />
          <ToolsComponent image={next} name="Next JS" />
          <ToolsComponent image={bootstrap} name="Bootstrap" />
          <ToolsComponent image={git} name="Git" />
          <ToolsComponent image={github} name="Github" />
          <ToolsComponent image={vite} name="Vite JS" />
          <ToolsComponent image={vscode} name="VS Code" />
          <ToolsComponent image={Ts} name="Typescript" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
