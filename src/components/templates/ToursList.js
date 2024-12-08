import React from "react";
import TourCard from "../organizations/TourCard";

export default async function ToursList() {
  const res = await fetch("http://localhost:6500/tour");
  const data = await res.json();

  return (
    <div className="w-full mt-[84px]  ">
      <h1 className="mb-[11px] text-[32px]">همه تور ها</h1>
      <div className="flex flex-wrap justify-between gap-[24.75px] w-auto h-auto  ">
        {data.map((tour, index) => (
          <TourCard key={index} data={tour} />
        ))}
      </div>
    </div>
  );
}
