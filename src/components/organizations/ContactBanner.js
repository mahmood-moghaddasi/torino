import Image from "next/image";
import React from "react";
import cartoon from "@/images/contact_us_banner_cartoon.svg";
import call from "@/images/icons/call.svg";

import Button_M from "../atoms/buttons/Button_M";
function ContactBanner() {
  return (
    <div
      className="flex w-full h-[251px] mt-[109px] border rounded-[10px] overflow-hidden max-md:overflow-visible max-md:flex-col
  "
    >
      <div className="w-3/4 max-md:w-full max-md:h-2/3 h-full gap-3 bg-primary-color relative rounded-[10px] overflow-hidden pr-[57px] pt-[36px]  max-md:pr-[12px] max-md:pt-[12px]  max-md:overflow-visible">
        <p className="text-[48px] text-white font-yekan font-extrabold max-md:text-[22px]">
          خرید تلفنی از <span className="text-primary-dark-color">تورینو</span>
        </p>
        <p className="text-[32px] text-white font-yekan font-normal max-md:text-[14px]">
          به هرکجا که میخواهید!
        </p>
        <Image
          className=" absolute left-11 top-[26px] max-md:left-0 max-md:top-[-58px] "
          src={cartoon}
          alt="cartoon"
          height={225}
          width={308}
        />
      </div>
      <div className="flex flex-col justify-center gap-3 items-center w-1/4 h-full max-md:w-full max-md:h-1/3 max-md:flex-row">
        <div className="flex">
          <p className="text-[28px] font-vazir font-medium">021-1840</p>
          <Image src={call} width={24} height={24} alt="call" />
        </div>
        <button className="w-[175px] h-[41px] bg-primary-dark-color rounded-[9px] text-white font-vazir font-medium">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
}

export default ContactBanner;
