import Image from "next/image";
import React from "react";
import location from "@/images/icons/location.svg";
function LocationSelector({ type }) {
  return (
    <div className="flex gap-2 border-l pr-[18px] ">
      <Image src={location} width={20} height={20} alt="location" />
      <input placeholder="مبدا" className="border-none outline-none" />
    </div>
  );
}

export default LocationSelector;
