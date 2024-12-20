"use client";
import Header from "@/components/templates/Header";
import AuthProvider from "@/provider/AuthProvider";
import Image from "next/image";
import React, { useState } from "react";
import sun from "@/images/icons/sun2.svg";
import sunG from "@/images/icons/sunG.svg";
import transG from "@/images/icons/transactionG.svg";

import trans from "@/images/icons/transaction.svg";
import personG from "@/images/icons/person.svg";
import person from "@/images/icons/personB.svg";

import { useRouter } from "next/navigation";

function ProfileLayout({ children }) {
  const [page, setPage] = useState(1);
  const selected = "bg-primary-color/25";
  const router = useRouter();
  return (
    <AuthProvider>
      <div className="flex pt-9 pr-[126px] pl-[126px] gap-[18px] mb-12">
        <div className=" h-[170px] divide-y  border  w-auto rounded-[10px] overflow-hidden">
          <div
            className={`flex cursor-pointer gap-2 w-[284px] pt-5 pb-4 pr-3 ${page === 1 ? selected : ""}`}
            onClick={() => {
              setPage(1);
              router.push("/profile");
            }}
          >
            <Image
              src={page === 1 ? personG : person}
              height={20}
              width={20}
              alt="person"
            />
            <p
              className={`text-[14px] font-normal  ${page === 1 ? "text-primary-color" : "text-text-color"} `}
            >
              پروفایل
            </p>
          </div>
          <div
            className={`flex gap-2 w-[284px] cursor-pointer pt-4 pb-4 pr-3 ${page === 2 ? selected : ""}`}
            onClick={() => {
              setPage(2);
              router.push("/profile/tours");
            }}
          >
            <Image
              src={page === 2 ? sunG : sun}
              height={20}
              width={20}
              alt="sun"
            />
            <p
              className={`text-[14px] font-normal  ${page === 2 ? "text-primary-color" : "text-text-color"}`}
            >
              تور های من
            </p>
          </div>
          <div
            className={`flex gap-2 w-[284px] cursor-pointer pt-4 pb-5 pr-3  ${page === 3 ? selected : ""}`}
            onClick={() => {
              setPage(3);
              router.push("/profile/transactions");
            }}
          >
            <Image
              src={page === 3 ? transG : trans}
              height={20}
              width={20}
              alt="convert"
            />
            <p
              className={`text-[14px] font-normal  ${page === 3 ? "text-primary-color" : "text-text-color"} `}
            >
              تراکنش های من
            </p>
          </div>
        </div>
        {children}
      </div>
    </AuthProvider>
  );
}

export default ProfileLayout;
