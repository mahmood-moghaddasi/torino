import Image from "next/image";
import React from "react";
import Button_2xS from "../atoms/buttons/Button_2xS";

function TourCard({ data }) {
  const { id, origin, title, price, startDate, endDate, image } = data;

  console.log(image);
  return (
    <div className="">
      <img
        src={data.image}
        // width={278.44}
        // height={159}
        className="w-[278.44px] h-[159px]"
        alt={title}
      />
      <div className="flex flex-col p-2 border gap-1 ">
        <p className="text-[22px] font-yekan font-normal">{title}</p>
        <p className="text-text-color/70 font-yekan font-normal opacity-65 text-[15px]">
          هتل 3 ستاره
        </p>
      </div>
      <div className="flex justify-between p-2 border rounded-b-[10px]">
        <Button_2xS text={"رزرو"} tourId={id} />
        <span className="font-vazir font-normal text-[12px]">
          <span className="text-complementry-color text-[16px]"> {price} </span>
          تومان
        </span>
      </div>
    </div>
  );
}

export default TourCard;
