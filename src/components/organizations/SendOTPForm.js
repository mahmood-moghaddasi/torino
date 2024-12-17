import React from "react";
import Button_3xL from "../atoms/buttons/Button_3xL";
import { useSendOTP } from "@/services/mutations";
import { isValidMobile } from "@/utils/validation";
import { toast } from "react-toastify";
function SendOTPForm({ setMobile, mobile, setStep }) {
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
    <div className="bg-white w-[561px] h-[362px] rounded-[20px] flex flex-col items-center pt-[54px] pr-[30px] pl-10 pb-10 gap-10">
      <h1>ورود به تورینو</h1>
      <form onSubmit={sendOTPHandler}>
        <label className="text-text-color">شماره مبایل خود را وارد کنید</label>
        <input
          placeholder="۴۳۲۵***۲۱۹۰"
          className="h-[54px] w-[491px] border border-black/25 rounded-[6px] outline-none mt-3
      pr-2 mb-10"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Button_3xL text={"ارسال کد تایید"} type={"submit"} />
      </form>
    </div>
  );
}

export default SendOTPForm;
