import React from "react";
import TourCard from "../organizations/TourCard";
import { serverFetch } from "@/services/http";

export default function ToursList({ tours }) {
  console.log(tours);
  if (!tours.length) return <p>نتیجه ای یافت نشد</p>;

  return (
    <div className="w-full mt-[84px]  ">
      <h1 className="mb-[11px] text-[32px]">همه تور ها</h1>
      <div className=" w-auto flex flex-wrap justify-between items-center gap-[24.75px]  h-auto  ">
        {tours?.map((tour, index) => (
          <TourCard key={index} data={tour} />
        ))}
      </div>
    </div>
  );
}
