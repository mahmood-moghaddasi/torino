"use client";
import Link from "next/link";
import React from "react";
import edit from "@/images/icons/edit2.svg";
import Image from "next/image";
function EditBankAccInfo({ form, formHandler, submitHandler }) {
  return (
    <div className="h-[179px] border rounded-[10px] w-full flex flex-col pr-3 pt-3 pl-4 gap-5 overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-[16px] font-normal text-black">
          اطلاعات حساب بانکی
        </h2>
      </div>
      <div className="flex flex-wrap gap-7 gap-y-3 justify-between  items-center w-full relative">
        <input
          className="w-[264px] h-[45px] outline-none border rounded-[5px] pr-2 text-[14px] border-black/50"
          placeholder="شماره شبا"
          value={form.payment.shaba_code}
          name="shaba_code"
          onChange={formHandler}
        />
        <input
          className="w-[264px] h-[45px] outline-none border rounded-[5px] pr-2 text-[14px] border-black/50"
          placeholder="شماره کارت"
          value={form.payment.debitCard_code}
          name="debitCard_code"
          onChange={formHandler}
        />
        <input
          className="w-[264px] h-[45px] outline-none border rounded-[5px] pr-2 text-[14px] border-black/50"
          placeholder="شماره حساب"
          value={form.payment.accountIdentifier}
          name="accountIdentifier"
          onChange={formHandler}
        />
      </div>
      <div className="border-t flex gap-3 items-center pt-2 justify-end w-full">
        <button
          className="w-[144px] h-[41px] self-end bg-primary-color rounded-[5px] text-white text-[16px] font-semibold"
          onClick={submitHandler}
        >
          تایید
        </button>
        <button className="w-[144px] h-[41px] self-end border-2 text-primary-color border-primary-color  rounded-[5px] text-[16px] font-semibold">
          انصراف
        </button>
      </div>
    </div>
  );
}

export default EditBankAccInfo;
