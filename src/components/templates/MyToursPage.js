import React from "react";
import MyTourCard from "../organizations/MyTourCard";

function MyToursPage() {
  return (
    <div className="w-full h-auto ml-[14px] px-5 pb-5 pt-[13px] border rounded-[10px] flex flex-col gap-4">
      <MyTourCard />
      <MyTourCard />
      <MyTourCard />
    </div>
  );
}

export default MyToursPage;
