"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import errorImg from "@/images/connectionError.svg";
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="pl-[174px] pr-[174px] flex items-center w-full justify-between">
      <div className="flex flex-col items-center gap-[25px]">
        <p className="text-[36px] text-text-color font-bold font-yekan">
          اتصال با سرور برقرار نیست!
        </p>
        <p className="text-[24px] text-text-color font-bold font-yekan">
          لطفا بعدا دوباره امتحان کنید.
        </p>
      </div>
      <Image src={errorImg} width={555} height={555} alt="error" />
    </div>
  );
}
