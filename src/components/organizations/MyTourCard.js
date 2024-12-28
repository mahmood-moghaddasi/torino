import Image from "next/image";
import React from "react";
import bus from "@/images/icons/bus2.svg";
import airplane from "@/images/icons/airplane.svg";
import ship from "@/images/icons/ship.svg";
import sun from "@/images/icons/sun.svg";
import { dateSeparator } from "@/utils/helper";

function MyTourCard({ tour }) {
  const Vehicle =
    tour.fleetVehicle === "bus"
      ? bus
      : tour.fleetVehicle === "airplane"
        ? airplane
        : ship;
  return (
    <div className=" relative  w-full h-[168px] flex flex-col border rounded-[10px] divide-y ">
      <div className=" absolute top-5 left-5 w-auto h-5 px-[7px] rounded-[27px] bg-primary-color/30">
        <p className="text-[12px] font-normal text-primary-color font-yekan">
          به اتمام رسیده
        </p>
      </div>
      <div className="flex flex-col gap-[23px] w-full h-auto pr-4 pt-[17px] pb-5">
        <div className="flex gap-[147px]">
          <div className="flex gap-2">
            <Image src={sun} width={24} height={24} alt="sun" />
            <p className="text-[14px] font-normal text-black font-yekan">
              {tour.title}
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={Vehicle} width={28} height={28} alt="sun" />
            <p className="text-[14px] font-normal text-black font-yekan">
              {tour.fleetVehicle}
            </p>
          </div>
        </div>
        <div className="flex gap-[42px]">
          <div className="flex gap-2">
            <p className="text-[14px] font-semibold text-black font-yekan">
              {tour.origin.name} به {tour.destination.name}
            </p>
            <span className="text-[14px] font-normal text-black/60 font-vazir">
              {dateSeparator(tour.startDate).date}
            </span>
          </div>
          <div className="flex gap-2">
            <p className="text-[14px] font-semibold text-black font-yekan">
              تاریخ برگشت
            </p>
            <span className="text-[14px] font-normal text-black/60 font-vazir">
              {dateSeparator(tour.endDate).date}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex divide-x divide-x-reverse pr-[18px] py-4 ">
        <div className="flex pl-[26px] gap-2">
          <p className="text-[14px] font-normal text-black/50 font-yekan">
            شماره تور
          </p>
          <span className="text-[14px] font-medium text-text-color font-vazir">
            0918234
          </span>
        </div>
        <div className="flex pr-[22px] gap-2">
          <p className="text-[14px] font-normal text-black/50 font-yekan">
            مبلغ پرداخت شده
          </p>
          <span className="font-vazir font-light text-[10px] text-text-color">
            <span className=" text-[14px] font-medium"> {tour.price} </span>
            تومان
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyTourCard;
