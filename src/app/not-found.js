"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import error from "@/images/Error.svg";
function NotFoundPage() {
  return (
    <div className="pl-[174px] pr-[174px] flex items-center w-full justify-between">
      <div className="flex flex-col items-center gap-[81px]">
        <p className="text-[36px] text-text-color font-semibold">
          صفحه مورد نظر یافت نشد!
        </p>
        <button className="w-[361px] h-[75px] text-[28px] text-primary-color font-semibold bg-[#D8FFE1]">
          <Link href={"/"}>بازگشت به صفحه اصلی</Link>
        </button>
      </div>
      <Image src={error} width={555} height={555} alt="error" />
    </div>
  );
}

export default NotFoundPage;
