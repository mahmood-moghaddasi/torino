import api from "@/config/api";
import React from "react";
import Button_xL from "../atoms/buttons/Button_xL";
import Image from "next/image";

import map from "@/images/icons/map.svg";
import bus from "@/images/icons/bus.svg";
import calendar2 from "@/images/icons/calendar2.svg";
import calendar3 from "@/images/icons/calendar3.svg";
import medal from "@/images/icons/medal.svg";
import profile2user from "@/images/icons/profile2user.svg";
import routing from "@/images/icons/routing.svg";
import security from "@/images/icons/security.svg";
import userTick from "@/images/icons/user-tick.svg";

async function TourDetailCard({ data }) {
  const {
    id,
    origin,
    title,
    price,
    startDate,
    endDate,
    image,
    destination,
    fleetVehicle,
    availableSeats,
    insurance,
  } = data;
  console.log(data);
  return (
    <div className="bg-white max-w-[1188px] h-[427px] pr-5 pl-6 pt-[29px] pb-5 flex flex-col gap-11 rounded-[10px]">
      <div className="flex h-[265px] gap-6">
        <img
          src={image}
          className="w-[397px] h-[265px] rounded-xl"
          // width={397}
          // height={265}
        />
        <div className="flex flex-col gap-4 ">
          <h1 className="text-[32px] font-bold">{title}</h1>
          <p className="text-[20px] text-text-color font-normal">
            ۵ روز و ۴ شب
          </p>
          <div className="flex gap-8 mt-2">
            <div className="flex gap-2">
              <Image src={userTick} width={24} height={24} alt="icon" />
              <span className="text-[20px] text-[#7D7D7D] font-normal">
                تورلیدر از مبدا
              </span>
            </div>
            <div className="flex gap-2">
              <Image src={map} width={24} height={24} alt="icon" />
              <span className="text-[20px] text-[#7D7D7D] font-normal">
                برنامه صفر
              </span>
            </div>
            <div className="flex gap-2">
              <Image src={medal} width={24} height={24} alt="icon" />
              <span className="text-[20px] text-[#7D7D7D] font-normal">
                تضمین کیفیت
              </span>
            </div>
          </div>
          <span className="text-complementry-color text-[28px] mt-4">
            {price}
            <span className="text-text-color/80 text-[14px]">تومان</span>
          </span>
        </div>
        <div className="self-end ">
          <Button_xL text={"رزرو و خرید"} />
        </div>
      </div>
      <div className="flex divide-x divide-x-reverse">
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={routing} width={20} height={20} alt="icon" />
            <p>مبدا</p>
          </div>
          <span>{origin.name}</span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={calendar2} width={20} height={20} alt="icon" />
            <p>تاریخ رفت</p>
          </div>
          <span>20 مهر 1403</span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={calendar3} width={20} height={20} alt="icon" />
            <p>تاریخ برگشت</p>
          </div>
          <span>28 مهر 1403</span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={bus} width={20} height={20} alt="icon" />
            <p>حمل و نقل</p>
          </div>
          <span>{fleetVehicle}</span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={profile2user} width={20} height={20} alt="icon" />
            <p>ظرفیت</p>
          </div>
          <span>حداکثر {availableSeats} نفر</span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={security} width={20} height={20} alt="icon" />
            <p>بیمه</p>
          </div>
          <span>بیمه 50 هزار دیناری</span>
        </div>
      </div>
    </div>
  );
}

export default TourDetailCard;
