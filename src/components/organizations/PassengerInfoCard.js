import Image from "next/image";
import React from "react";
import person from "@/images/icons/personB.svg";
function PassengerInfoCard() {
  return (
    <div className="bg-white w-fit p-5 pb-[30px]  h-fit flex flex-col gap-4 rounded-[10px]">
      <div className="flex">
        <Image src={person} width={24} height={24} alt="person" />
        <h1 className="text-[#171717] text-[24px] font-normal">مشخصات مسافر</h1>
      </div>
      <div className="flex flex-wrap gap-y-6 gap-x-5 ">
        <input className="w-[263px] h-[50px] outline-none border border-black/50 rounded-[5px] pr-2 text-[14px] font-normal " />
        <input className="w-[263px] h-[50px] outline-none border border-black/50 rounded-[5px] pr-2 text-[14px] font-normal " />
        <input className="w-[263px] h-[50px] outline-none border border-black/50 rounded-[5px] pr-2 text-[14px] font-normal " />
        <input className="w-[263px] h-[50px] outline-none border border-black/50 rounded-[5px] pr-2 text-[14px] font-normal " />
      </div>
    </div>
  );
}

export default PassengerInfoCard;
