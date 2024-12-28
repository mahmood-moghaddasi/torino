"use client";
import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import Button_3xL from "../atoms/buttons/Button_3xL";
import { useCheckOTP } from "@/services/mutations";
import { setCookie } from "@/utils/cookie";
import Image from "next/image";
import cross from "@/images/icons/cross.svg";
function CheckOTPForm({ mobile, setStep, setShowLoginForm }) {
  const { mutate, isPending } = useCheckOTP();
  const [code, setCode] = useState("");
  const changeHandler = (otp) => {
    setCode(otp);
  };
  const checkOTPHandler = (e) => {
    e.preventDefault();
    if (isPending) return;
    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          console.log(data);
          setCookie("accessToken", data?.data?.accessToken, 30);
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          setStep(1);
          setShowLoginForm(false);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <div className="bg-white w-[561px] h-[362px] rounded-[20px] flex flex-col items-center pt-[54px] pr-[30px] pl-10 pb-10 relative">
      <button
        className=" absolute top-4 left-4"
        onClick={() => setShowLoginForm(false)}
      >
        <Image src={cross} width={20} height={20} alt="cross" />
      </button>

      <h1 className="text-[28px] text-text-color font-bold font-yekan">
        کد تایید را وارد کنید
      </h1>
      <p className="text-[16px] text-text-color font-normal font-yekan">
        کد تایید به شماره {mobile} ارسال شد
      </p>
      <form
        className="flex flex-col items-center gap-7 mt-8"
        style={{ direction: "ltr" }}
        onSubmit={checkOTPHandler}
      >
        <OtpInput
          value={code}
          onChange={changeHandler}
          numInputs={6}
          inputStyle={{
            border: "1px solid silver",
            borderRadius: "5px",
            width: "49px",
            height: "45px",
            marginRight: "5px",
          }}
        />
        <p className="text-[12px] font-yekan text-text-color font-light ">
          <span className="font-vazir ">20 </span>تا ارسال مجدد
        </p>
        <button
          className="w-[491px] h-[54px] bg-primary-color rounded-[6px] text-white text-[18px] font-medium font-vazir"
          type="submit"
        >
          ورورد به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
