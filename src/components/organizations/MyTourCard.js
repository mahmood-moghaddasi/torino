import Image from "next/image";
import React from "react";
import bus from "@/images/icons/bus2.svg";
import airplane from "@/images/icons/airplane.svg";
import ship from "@/images/icons/ship.svg";
import sun from "@/images/icons/sun.svg";

function MyTourCard() {
  return (
    <div className=" relative  w-full h-[168px] flex flex-col border rounded-[10px] divide-y ">
      <div className=" absolute top-5 left-5 w-auto h-5 px-[7px] rounded-[27px] bg-primary-color/30">
        <p className="text-[12px] font-normal text-primary-color">
          به اتمام رسیده
        </p>
      </div>
      <div className="flex flex-col gap-[23px] w-full h-auto pr-4 pt-[17px] pb-5">
        <div className="flex gap-[147px]">
          <div className="flex gap-2">
            <Image src={sun} width={24} height={24} alt="sun" />
            <p className="text-[14px] font-normal text-black">
              تور اقلیم کردستان
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={airplane} width={28} height={28} alt="sun" />
            <p className="text-[14px] font-normal text-black">سفر با هواپیما</p>
          </div>
        </div>
        <div className="flex gap-[42px]">
          <div className="flex gap-2">
            <p className="text-[14px] font-semibold text-black">
              تهران به سلیمانیه
            </p>
            <span className="text-[14px] font-normal text-black/60">
              دوشنبه 15 شهریور 1402
            </span>
          </div>
          <div className="flex gap-2">
            <p className="text-[14px] font-semibold text-black">تاریخ برگشت</p>
            <span className="text-[14px] font-normal text-black/60">
              جمعه 19 شهریور 1402
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex divide-x divide-x-reverse pr-[18px] py-4 ">
        <div className="flex pl-[26px] gap-2">
          <p className="text-[14px] font-normal text-black/50">شماره تور</p>
          <span className="text-[14px] font-medium text-text-color">
            {" "}
            0918234
          </span>
        </div>
        <div className="flex pr-[22px] gap-2">
          <p className="text-[14px] font-normal text-black/50">
            مبلغ پرداخت شده
          </p>
          <span className="text-[14px] font-medium text-text-color">
            32424507
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyTourCard;
