import Image from "next/image";
import React from "react";
import cartoon from "@/images/contact_us_banner_cartoon.svg";
import call from "@/images/icons/call.svg";

import Button_M from "../atoms/buttons/Button_M";
function ContactBanner() {
  return (
    <div className="flex w-full h-[251px] mt-[109px] border rounded-[10px]">
      <div className="w-3/4 h-full gap-3 bg-primary-color relative overflow-hidden pr-[57px] pt-[36px]">
        <p className="text-[48px] text-white font-bold">
          خرید تلفنی از <span className="text-primary-dark-color">تورینو</span>
        </p>
        <p className="text-[32px] text-white">به هرکجا که میخواهید!</p>
        <Image
          className=" absolute left-11 top-[26px]"
          src={cartoon}
          alt="cartoon"
          height={225}
          width={308}
        />
      </div>
      <div className="flex flex-col justify-center gap-3 items-center w-1/4 h-full">
        <div className="flex">
          <p className="text-[28px]">021-1840</p>
          <Image src={call} width={24} height={24} alt="call" />
        </div>
        <Button_M text={"اطلاعات بیشتر"} />
      </div>
    </div>
  );
}

export default ContactBanner;
