import React from "react";
import Logo from "../../../public/logo/logo2.svg";
import Image from "next/image";
const Logoo = () => {
  return (
    <div>
      <Image src={Logo} alt="logo" />
    </div>
  );
};

export default Logoo;
