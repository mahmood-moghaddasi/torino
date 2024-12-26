"use client";
import Image from "next/image";
import React from "react";
import person from "@/images/icons/personB.svg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passengerSchema } from "@/schema";
import { DatePicker } from "zaman";
import { dateSeparator, DateToIso } from "@/utils/helper";
import { useCheckout } from "@/services/mutations";
import { useRouter } from "next/navigation";
function PassengerInfoCard({ mutate }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passengerSchema),
  });

  const router = useRouter();
  function onSubmit(values) {
    mutate(values, {
      onSuccess: (data) => {
        console.log(data);
        router.push(router.push("/payment?status=success"));
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <form
      id="hook-form"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="bg-white w-fit p-5 pb-[30px]  h-fit flex flex-col gap-4 rounded-[10px]"
    >
      <div className="flex">
        <Image src={person} width={24} height={24} alt="person" />
        <h1 className="text-[#171717] text-[24px] font-normal">مشخصات مسافر</h1>
      </div>
      <div className="flex flex-wrap gap-y-6 gap-x-5 ">
        <div className="w-auto h-auto flex flex-col">
          <input
            {...register("fullName")}
            className={`w-[263px] h-[50px] outline-none border ${!!errors?.fullName ? "border-[#D40000]" : "border-black/50"} rounded-[5px] pr-2 text-[14px] font-normal `}
            placeholder="نام و نام خانوادگی"
          />
          {!!errors?.fullName && (
            <span className="text-[#D40000]">{errors?.fullName?.message}</span>
          )}
        </div>
        <div className="w-auto h-auto flex flex-col">
          <input
            {...register("nationalCode")}
            className={`w-[263px] h-[50px] outline-none border ${!!errors?.nationalCode ? "border-[#D40000]" : "border-black/50"} rounded-[5px] pr-2 text-[14px] font-normal `}
            placeholder="کد ملی"
            type="number"
          />
          {!!errors?.nationalCode && (
            <span className="text-[#D40000]">
              {errors?.nationalCode?.message}
            </span>
          )}
        </div>
        <div className="w-auto h-auto flex flex-col">
          <div
            className={`flex relative border w-auto h-[50px] ${!!errors?.nationalCode ? "border-[#D40000]" : "border-black/50"}`}
          >
            <Controller
              control={control}
              name="birthDate"
              render={({ field: { onChange } }) => (
                <DatePicker
                  round="x2"
                  accentColor="#28A745"
                  onChange={(e) =>
                    onChange({
                      birthDate: DateToIso(e.value),
                    })
                  }
                />
              )}
            />
          </div>
          {!!errors?.birthDate && (
            <span className="text-[#D40000]">{errors?.birthDate?.message}</span>
          )}
        </div>
        <div className="w-auto h-auto flex flex-col">
          {" "}
          <select
            {...register("gender")}
            className={`w-[263px] h-[50px] outline-none border ${!!errors?.gender ? "border-[#D40000]" : "border-black/50"} rounded-[5px] pr-2 text-[14px] font-normal `}
            placeholder=""
          >
            <option value="" selected disabled hidden>
              جنسیت
            </option>
            <option value={"مرد"}>مرد</option>
            <option value={"زن"}>زن</option>
          </select>
          {!!errors?.gender && (
            <span className="text-[#D40000]">{errors?.gender?.message}</span>
          )}
        </div>
      </div>
    </form>
  );
}

export default PassengerInfoCard;
