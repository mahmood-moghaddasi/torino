import React from "react";
import Button_3xL from "../atoms/buttons/Button_3xL";
import { useSendOTP } from "@/services/mutations";
import { isValidMobile } from "@/utils/validation";
import { toast } from "react-toastify";
import Image from "next/image";
import cross from "@/images/icons/cross.svg";

function SendOTPForm({ setMobile, mobile, setStep, setShowLoginForm }) {
  const { isPending, mutate } = useSendOTP();
  const sendOTPHandler = (e) => {
    e.preventDefault();
    if (isPending) return;
    if (!isValidMobile(mobile)) return console.log("number invalid");
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <div className="bg-white w-[561px] h-[362px] rounded-[20px] flex flex-col items-center pt-[54px] pr-[30px] pl-10 pb-10 gap-10 relative">
      <button
        className=" absolute top-4 left-4"
        onClick={() => setShowLoginForm(false)}
      >
        <Image src={cross} width={20} height={20} alt="cross" />
      </button>
      <h1 className="font-yekan font-bold text-[28px] text-text-color">
        ورود به تورینو
      </h1>
      <form onSubmit={sendOTPHandler}>
        <label className="text-black font-yekan font-light text-[16px]">
          شماره مبایل خود را وارد کنید
        </label>
        <input
          placeholder="09170000000"
          className="h-[54px] w-[491px] placeholder:font-vazir placeholder:font-light font-vazir font-light border border-black/25 rounded-[6px] outline-none mt-3
      pr-2 mb-10"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          className="w-[491px] h-[54px] bg-primary-color rounded-[6px] text-white text-[18px] font-medium font-vazir "
          type="submit"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
