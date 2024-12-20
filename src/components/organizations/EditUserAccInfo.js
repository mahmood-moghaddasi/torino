import React from "react";
import Image from "next/image";

function EditUserAccInfo() {
  return (
    <div className="h-[115px] border rounded-[10px] w-full flex flex-col pr-3 pt-3 pl-[26px] gap-3 overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-[16px] font-normal text-black">
          اطلاعات حساب کاربری
        </h2>
      </div>
      <div className="flex justify-between items-center w-full ">
        <div className="flex gap-9 ">
          <p className="text-[14px] font-light">شماره مبایل</p>
          <span className="text-[14px] font-normal text-text-color">
            ۰۹۱۷۹۵۸۹۳۹۵
          </span>
        </div>
        <div className="flex  gap-3">
          <input
            className="w-[255px] h-[45px] outline-none border rounded-[5px] pr-2 text-[14px] border-black/50"
            placeholder="آدرس ایمیل"
          />
          <button className="w-[122px] h-[45px] text-[16px] font-semibold bg-primary-color rounded-[5px] text-white">
            تایید
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUserAccInfo;
