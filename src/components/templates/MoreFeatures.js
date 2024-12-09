import Image from "next/image";
import React from "react";
import comment from "@/images/icons/comment.svg";
import hearts from "@/images/icons/hearts.svg";
import percent from "@/images/icons/percent.svg";

function MoreFeatures() {
  return (
    <div className="flex justify-between px-[152.47px] border-t pb-[25px] pt-[30px]">
      <div className="flex items-center gap-2">
        <Image src={percent} width={121.42} height={109.03} alt="icon" />
        <div className="w-[202px]">
          <p className="text-[26px] font-medium">بصرفه ترین قیمت</p>
          <p className="text-[16px] font-light">
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={comment} width={109.03} height={99.012} alt="icon" />
        <div className="w-[248px]">
          <p className="text-[26px] font-medium">پشتیبانی</p>
          <p className="text-[16px] font-light">
            پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={hearts} width={104.08} height={104.08} alt="icon" />
        <div className="w-[192px]">
          <p className="text-[26px] font-medium">رضایت کاربران</p>
          <p className="text-[16px] font-light">
            رضایت بیش از 10هزار کاربر از تور های ما.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoreFeatures;
