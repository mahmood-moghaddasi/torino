import Image from "next/image";
import React from "react";
import comment from "@/images/icons/comment.svg";
import hearts from "@/images/icons/hearts.svg";
import percent from "@/images/icons/percent.svg";

function MoreFeatures() {
  return (
    <div className="flex justify-between px-[152.47px] border-t pb-[25px] pt-[30px] max-md:flex-col max-md:gap-[39px] max-md:pt-[43px] max-md:pb-[32px] max-md:w-full">
      <div className="flex items-center gap-2 max-md:w-full">
        <Image src={percent} width={121.42} height={109.03} alt="icon" />
        <div className="w-[202px] max-md:w-auto">
          <p className="text-[26px] max-sm:text-[14px] font-medium font-vazir">
            بصرفه ترین قیمت
          </p>
          <p className="text-[16px] font-light font-vazir text-text-color max-sm:text-[12px]">
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={comment} width={109.03} height={99.012} alt="icon" />
        <div className="w-[248px]">
          <p className="text-[26px] font-medium font-vazir max-sm:text-[14px]">
            پشتیبانی
          </p>
          <p className="text-[16px] font-light font-vazir text-text-color max-sm:text-[12px]">
            پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={hearts} width={104.08} height={104.08} alt="icon" />
        <div className="w-[192px]">
          <p className="text-[26px] font-medium font-vazir max-sm:text-[14px]">
            رضایت کاربران
          </p>
          <p className="text-[16px] font-light font-vazir text-text-color max-sm:text-[12px]">
            رضایت بیش از 10هزار کاربر از تور های ما.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoreFeatures;
