import React from "react";
import Logo from "../../../public/logo/logow.svg";
import Image from "next/image";
const Logoo = () => {
  return (
    <div>
      <Image src={Logo} alt="logo" className="w-[2.5rem]" />
    </div>
  );
};

export default Logoo;
