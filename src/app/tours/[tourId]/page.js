import TourDetailCard from "@/components/templates/TourDetailCard";
import React from "react";

async function TourDetailPage({ params }) {
  const { tourId } = params;
  console.log(tourId);
  const res = await fetch(`http://localhost:6500/tour/${tourId}`);
  const data = await res.json();
  return (
    <div className="bg-[#F3F3F3] w-full h-[562px] flex items-center justify-center">
      <TourDetailCard data={data} />
    </div>
  );
}

export default TourDetailPage;
