import Link from "next/link";
import React from "react";
import edit from "@/images/icons/edit2.svg";
import Image from "next/image";
function BankAccInfoCard({ user }) {
  const {
    payment: { shaba_code, debitCard_code, accountIdentifier },
  } = user.data.form;
  return (
    <div className="h-[171px] border rounded-[10px] w-full flex flex-col pr-3 pt-3 pl-4 gap-7 overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-[16px] font-normal text-black">
          اطلاعات حساب بانکی
        </h2>
        <Link
          className="flex flex-row-reverse text-complementry-color text-[14px] font-normal"
          href="profile/edit"
        >
          ویرایش اطلاعات
          <Image src={edit} width={16} height={16} alt="icon" />
        </Link>
      </div>
      <div className="flex justify-between w-full relative">
        <div className="flex gap-9 ">
          <p className="text-[14px] font-light">شماره شبا</p>
          <span className="text-[14px] font-normal text-text-color">
            {shaba_code || "---"}
          </span>
        </div>
        <div className="flex absolute right-[484px] gap-9">
          <p className="text-[14px] font-light">شماره کارت</p>
          <span className="text-[14px] font-normal text-text-color">
            {debitCard_code || "---"}
          </span>
        </div>
      </div>
      <div className="flex justify-between w-full relative">
        <div className="flex gap-9 ">
          <p className="text-[14px] font-light">شماره حساب</p>
          <span className="text-[14px] font-normal text-text-color">
            {accountIdentifier || "---"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BankAccInfoCard;
