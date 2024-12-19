import Header from "@/components/templates/Header";
import React from "react";

function ProfileLayout({ children }) {
  return (
    <div className="flex pt-9 pr-[126px] gap-[18px]">
      <div className="divide-y border  w-auto rounded-[10px] overflow-hidden">
        <div className="w-[284px] pt-5 pb-4 pr-3 bg-primary-color/25">
          <p>پروفایل</p>
        </div>
        <div className="w-[284px] pt-4 pb-4 pr-3">
          <p>تور های من </p>
        </div>
        <div className="w-[284px] pt-4 pb-5 pr-3">
          <p>تراکنش های من</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default ProfileLayout;
