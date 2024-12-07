import Image from "next/image";
import React from "react";
import banner from "@/images/banner2.svg";
function Banner() {
  return (
    <div className="w-screen">
      <Image src={banner} width={2000} height={350} />
    </div>
  );
}

export default Banner;
