import Link from "next/link";
import React from "react";
import edit from "@/images/icons/edit2.svg";
import Image from "next/image";
function UserAccInfoCard({ user }) {
  const { mobile, email } = user.data.form;

  return (
    <div className="h-[115px] border rounded-[10px] w-full flex flex-col pr-3 pt-3 pl-4 gap-7 overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-[16px] font-normal text-black font-yekan">
          اطلاعات حساب کاربری
        </h2>
        <Link
          className="flex flex-row-reverse text-complementry-color text-[14px] font-normal"
          href="profile/edit"
        >
          افزودن
          <Image src={edit} width={16} height={16} alt="icon" />
        </Link>
      </div>
      <div className="flex justify-between w-full relative">
        <div className="flex gap-9 ">
          <p className="text-[14px] font-light font-yekan">شماره مبایل</p>
          <span className="text-[14px] font-normal text-text-color font-vazir">
            {mobile}
          </span>
        </div>
        <div className="flex absolute right-[484px] gap-9">
          <p className="text-[14px] font-light font-yekan">ایمیل</p>
          <span className="text-[14px] font-normal text-text-color font-vazir">
            {email || "---"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserAccInfoCard;
