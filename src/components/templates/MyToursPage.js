"use client";
import React from "react";
import MyTourCard from "../organizations/MyTourCard";
import { useGetUserTours } from "@/services/queries";
import { Oval } from "react-loader-spinner";

function MyToursPage() {
  const { data, isPending } = useGetUserTours();
  console.log(data);
  if (isPending) return;

  if (!isPending && data.data.length === 0)
    return (
      <div className="w-full h-auto ml-[14px] px-5 pb-5 pt-[13px] border rounded-[10px] flex flex-col items-center justify-center gap-4">
        <span className="">شما هیچ توری رزرو نداشته اید</span>
      </div>
    );

  return (
    <div className="w-full h-auto ml-[14px] px-5 pb-5 pt-[13px] border rounded-[10px] flex flex-col gap-4">
      {data.data.map((tour) => (
        <MyTourCard tour={tour} />
      ))}
    </div>
  );
}

export default MyToursPage;
