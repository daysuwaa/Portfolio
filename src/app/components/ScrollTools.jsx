import React from "react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import tailwind from "../../../public/tailwind.png";
import bootstrap from "../../../public/bootstrap.png";
import react from "../../../public/react.png";
import git from "../../../public/git.png";
import github from "../../../public/github.svg";
import vscode from "../../../public/vscode.svg";
import vite from "../../../public/vite.png";
import next from "../../../public/next.svg";
import ToolsComponent from "./ToolsComponent";

const ScrollTools = () => {
  return (
    <div className="block md:hidden  relative w-full overflow-x-scroll overflow-y-hidden">
      <div className="flex space-x-4 p-6 min-w-max">
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
      </div>
    </div>
  );
};

export default ScrollTools;
