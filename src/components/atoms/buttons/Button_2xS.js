"use client";

import React from "react";

import { useRouter } from "next/navigation";
function Button_2xS({ text, tourId }) {
  const router = useRouter();
  const routeHandler = () => {
    router.push(`/tours/${tourId}`);
  };
  return (
    <button
      className="w-16 h-[25px]  bg-primary-color rounded-[4px] text-white"
      onClick={routeHandler}
    >
      {text}
    </button>
  );
}

export default Button_2xS;
