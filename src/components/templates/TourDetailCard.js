"use client";
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
import { useAddToBasket } from "@/services/mutations";
import Link from "next/link";
import { useRouter } from "next/navigation";

function TourDetailCard({ data }) {
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
  const router = useRouter();
  console.log(data);
  const { mutate, isPending } = useAddToBasket(id);
  const reserveHandler = () => {
    if (isPending) return;
    router.push("/cart");
    mutate(null, {
      onSuccess: (response) => {
        router.push("/cart");
        console.log(response);
      },
    });
  };
  return (
    <div className="bg-white max-w-[1188px] h-[427px] pr-5 pl-6 pt-[29px] pb-5 flex flex-col gap-11 rounded-[10px] max-md:px-[30px] max-lg:gap-40 relative max-lg:mb-[200px]">
      <div className="flex h-[265px] gap-6 max-lg:flex-col max-lg:items-center">
        <img
          src={image}
          className="w-[397px] h-[265px] rounded-xl"
          // width={397}
          // height={265}
        />
        <div className="flex flex-col gap-4  ">
          <div className="flex flex-col gap-4 max-lg:flex-row max-lg:items-center max-lg:justify-between">
            <h1 className="text-[32px] font-bold font-yekan">{title}</h1>
            <p className="text-[20px] text-text-color font-normal font-vazir">
              ۵ روز و ۴ شب
            </p>
          </div>
          <div className="flex gap-8 mt-2 ">
            <div className="flex gap-2">
              <Image src={userTick} width={24} height={24} alt="icon" />
              <span className="text-[20px] text-[#7D7D7D] font-normal font-yekan">
                تورلیدر از مبدا
              </span>
            </div>
            <div className="flex gap-2">
              <Image src={map} width={24} height={24} alt="icon" />
              <span className="text-[20px] text-[#7D7D7D] font-normal font-yekan">
                برنامه صفر
              </span>
            </div>
            <div className="flex gap-2">
              <Image src={medal} width={24} height={24} alt="icon" />
              <span className="text-[20px] text-[#7D7D7D] font-normal font-yekan">
                تضمین کیفیت
              </span>
            </div>
          </div>
          <span className="text-complementry-color text-[28px] mt-4 font-vazir max-lg:absolute max-lg:top-[585px] max-lg:left-[50px]">
            {price}
            <span className="text-text-color/80 text-[14px]">تومان</span>
          </span>
        </div>
        <div className="self-end ">
          <button
            className="w-[204px] h-[56px] bg-primary-color rounded-[10px] text-white font-vazir font-normal text-[24px] max-lg:absolute max-lg:top-[600px] max-lg:right-[30px] max-lg:w-[154px] max-lg:h-[42px] max-lg:text-[20px]"
            onClick={reserveHandler}
          >
            رزرو و خرید
          </button>
        </div>
      </div>
      <div className="flex divide-x divide-x-reverse max-lg:divide-x-0">
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2 max-lg:hidden">
          <div className="flex gap-2 ">
            <Image src={routing} width={20} height={20} alt="icon" />
            <p className="font-vazir font-normal text-[18px] text-[#444444]">
              مبدا
            </p>
          </div>
          <span className="font-vazir font-medium text-[16px]">
            {origin.name}
          </span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2 max-lg:hidden">
          <div className="flex gap-2 ">
            <Image src={calendar2} width={20} height={20} alt="icon" />
            <p className="font-vazir font-normal text-[18px] text-[#444444]">
              تاریخ رفت
            </p>
          </div>
          <span className="font-vazir font-medium text-[16px]">
            20 مهر 1403
          </span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2 max-lg:hidden">
          <div className="flex gap-2">
            <Image src={calendar3} width={20} height={20} alt="icon" />
            <p className="font-vazir font-normal text-[18px] text-[#444444]">
              تاریخ برگشت
            </p>
          </div>
          <span className="font-vazir font-medium text-[16px]">
            28 مهر 1403
          </span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={bus} width={20} height={20} alt="icon" />
            <p className="font-vazir font-normal text-[18px] text-[#444444]">
              حمل و نقل
            </p>
          </div>
          <span className="font-vazir font-medium text-[16px]">
            {fleetVehicle}
          </span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={profile2user} width={20} height={20} alt="icon" />
            <p className="font-vazir font-normal text-[18px] text-[#444444]">
              ظرفیت
            </p>
          </div>
          <span className="font-vazir font-medium text-[16px]">
            حداکثر {availableSeats} نفر
          </span>
        </div>
        <div className="pr-11 pl-[43px] pt-2 pb-[10px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Image src={security} width={20} height={20} alt="icon" />
            <p className="font-vazir font-normal text-[18px] text-[#444444]">
              بیمه
            </p>
          </div>
          <span className="font-vazir font-medium text-[16px]">
            بیمه 50 هزار دیناری
          </span>
        </div>
      </div>
    </div>
  );
}

export default TourDetailCard;
