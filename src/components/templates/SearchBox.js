"use client";
import React, { useEffect, useState } from "react";
import { DatePicker } from "zaman";
import { Controller, useForm } from "react-hook-form";
import useQuery from "@/hooks/query";
import Image from "next/image";
import calender from "@/images/icons/calendar.svg";
import { DateToIso, flattenObject } from "@/utils/helper";
import location from "@/images/icons/location.svg";
import QueryString from "qs";
import { useRouter } from "next/navigation";
import { useGetTours } from "@/services/queries";

function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { getQuery } = useQuery();
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit, control, reset } = useForm();
  // const [showCalendar, setShowCalendar] = useState("hidden");
  // useEffect(() => {
  //   refetch();
  // }, [query]);
  const clickHandler = () => {
    if (showCalendar === "") return setShowCalendar("hidden");
    setShowCalendar("");
  };
  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({ originId, destinationId });
    console.log({ originId, destinationId });
  }, []);
  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
  };
  return (
    <div className="h-[71px]">
      <div className=" w-fit h-auto mt-[17px] flex flex-col gap-[28px] ">
        <h1 className="text-[28px] text-center">
          <span className="text-primary-color">تورینو </span>برگزار کننده بهترین
          تور های داخلی و خارجی
        </h1>
        <form
          className="flex border rounded-[20px] py-[7.5px] pr-[2px] pl-[10px]"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex w-auto relative">
            <div className="flex gap-2 border-l pr-[18px] ">
              <Image src={location} width={20} height={20} alt="location" />
              <select
                className="w-[220px] outline-none appearance-none"
                {...register("originId")}
              >
                <option value="1">تهران</option>
                <option value="2">سنندج</option>
                <option value="7">مازندران</option>
                <option value="3">مادرید</option>
                <option value="4">اصفهان</option>
                <option value="5">سلیمانیه</option>
                <option value="6">هولر</option>
                <option value="9">ایتالیا</option>
                <option value="8">مرکز آفرود</option>
              </select>
            </div>
            <div className="flex gap-2 border-l pr-[18px]  ">
              <Image src={location} width={20} height={20} alt="location" />

              <select
                className="w-[220px] outline-none appearance-none"
                {...register("destinationId")}
              >
                <option value="1">تهران</option>
                <option value="2">سنندج</option>
                <option value="7">مازندران</option>
                <option value="3">مادرید</option>
                <option value="4">اصفهان</option>
                <option value="5">سلیمانیه</option>
                <option value="6">هولر</option>
                <option value="9">ایتالیا</option>
                <option value="8">مرکز آفرود</option>
              </select>
            </div>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange } }) => (
                <DatePicker
                  position="center"
                  round="x2"
                  accentColor="#28A745"
                  onChange={(e) =>
                    onChange({
                      startDate: DateToIso(e.from),
                      endDate: DateToIso(e.to),
                    })
                  }
                  range
                />
              )}
            />
            <Image
              className=" absolute left-36 top-[15px]"
              src={calender}
              width={20}
              height={20}
              alt="calender"
              onClick={clickHandler}
            />
          </div>
          <button
            type="submit"
            className="w-[190px] h-[51px] bg-primary-color rounded-[16px] text-white"
          >
            جست و جو
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
