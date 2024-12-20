import Header from "@/components/templates/Header";
import AuthProvider from "@/provider/AuthProvider";
import React from "react";

function ProfileLayout({ children }) {
  return (
    <AuthProvider>
      <div className="flex pt-9 pr-[126px] pl-[126px] gap-[18px] mb-12">
        <div className=" h-[170px] divide-y  border  w-auto rounded-[10px] overflow-hidden">
          <div className="w-[284px] pt-5 pb-4 pr-3 bg-primary-color/25">
            <p>پروفایل</p>
          </div>
          <div className="w-[284px] pt-4 pb-4 pr-3">
            <p>تور های من </p>
          </div>
          <div className="w-[284px] pt-4 pb-5 pr-3 bg-primary-color/25">
            <p>تراکنش های من</p>
          </div>
        </div>
        {children}
      </div>
    </AuthProvider>
  );
}

export default ProfileLayout;
