import Image from "next/image";
import React from "react";
import banner from "@/images/banner2.svg";
function Banner() {
  return (
    <div className="w-screen overflow-hidden">
      <Image src={banner} width={1820} height={350} />
    </div>
  );
}

export default Banner;
