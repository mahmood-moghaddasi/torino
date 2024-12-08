import React from "react";
import TourCard from "../organizations/TourCard";

export default async function ToursList() {
  const res = await fetch("http://localhost:6500/tour");
  const data = await res.json();

  return (
    <div className="flex flex-wrap justify-center gap-[24.75px] w-auto h-auto mt-[84px]">
      {data.map((tour, index) => (
        <TourCard key={index} data={tour} />
      ))}
    </div>
  );
}
