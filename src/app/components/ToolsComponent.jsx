import React from "react";
import Image from "next/image";
const ToolsComponent = ({ image, name }) => {
  return (
    <div className="w-[130px]    h-[130px] flex-1 hover:scale-110 transition-all ">
      <Image
        src={image}
        alt="tool"
        width={130}
        height={130}
        className="h-full w-full items-center p-6  justify-center  "
      />
      <p className=" inter-font font-light text-[13px] text-center pb-2 ">
        {name}
      </p>
    </div>
  );
};

export default ToolsComponent;
