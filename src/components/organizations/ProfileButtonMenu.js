"use client";
import Image from "next/image";
import React from "react";

import exit from "@/images/icons/exit.svg";
import profileGray from "@/images/icons/profileGray.svg";
import profileOut from "@/images/icons/profileOut.svg";
import { useRouter } from "next/navigation";

function ProfileButtonMenu({ setShowMenu }) {
  const router = useRouter();
  return (
    <div className="flex flex-col w-[246px] h-auto rounded-[11px] absolute z-20 bottom-[-150px] right-[-50px] bg-white overflow-hidden">
      <div className="bg-[#F4F4F4] flex gap-2 pr-3 pt-[9px] pb-[7px]">
        <div className="w-7 h-7 rounded-full bg-[#D9D9D9] flex items-center justify-center">
          <Image src={profileGray} width={16} height={16} alt="person" />
        </div>
        <p className="text-[16px] font-medium text-secondary-color">
          09179589395
        </p>
      </div>
      <div
        className="flex items-center cursor-pointer pr-3 pt-[17px] pb-[7px] gap-2"
        onClick={() => {
          router.push("/profile");
          setShowMenu(false);
        }}
      >
        <Image src={profileOut} width={20} height={20} alt="person" />
        <p className="text-[14px] font-normal text-text-color">
          اطلاعات حساب کاربری
        </p>
      </div>
      <div className="flex items-center cursor-pointer pr-3 pt-[17px] pb-[7px] gap-2 border-t border-black/12 mb-1">
        <Image src={exit} width={20} height={20} alt="person" />
        <p className="text-[14px] font-normal text-[#D40000]">
          خروج از حساب کاربری
        </p>
      </div>
    </div>
  );
}

export default ProfileButtonMenu;
