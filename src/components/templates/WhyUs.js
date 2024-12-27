"use client";
import Image from "next/image";
import React from "react";
import p1 from "@/images/slider/1.svg";
import p2 from "@/images/slider/2.svg";
import p3 from "@/images/slider/3.svg";
import p4 from "@/images/slider/4.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import arrowR from "@/images/icons/arrow-right.svg";
import arrowL from "@/images/icons/arrow-left.svg";

import "swiper/css";
import "swiper/css/effect-cards";

import "../../app/globals.css";

// import required modules
import { EffectCards, Pagination, Navigation } from "swiper/modules";
function WhyUs() {
  const swiper = useSwiper();
  return (
    <div className="flex gap-24 justify-between pr-[26px] pl-[40px] pt-[91px] pb-4">
      <div className=" max-w-[517px] flex flex-col gap-4">
        <div className="flex gap-[15px]">
          <div className="bg-primary-dark-color rounded-[50%] w-[58px] h-[58px] flex items-center justify-center">
            <p className=" absolute text-white font-bold text-[38px]">؟</p>
          </div>
          <p className="text-[40px] mb-4">
            چرا <span className="text-primary-color">تورینو </span>؟
          </p>
        </div>
        <h2 className="text-2xl font-medium">تور طبیعت گردی و تاریخی</h2>
        <p className="text-justify text-[24px] lead-[44px]">
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <Swiper
          effect={"cards"}
          spaceBetween={30}
          grabCursor={true}
          modules={[EffectCards, Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          // className="mySwiper"
        >
          <SwiperSlide>
            <Image
              // className=" relative right-0 z-30 w-[389] h-[479]"
              className=" w-[389px] h-[479px] "
              alt="slider"
              src={p1}
              width={700}
              height={700}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className=" w-[389px] h-[479px] "
              alt="slider"
              src={p3}
              width={500}
              height={700}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className=" w-[389px] h-[479px] "
              alt="slider"
              src={p4}
              width={500}
              height={700}
            />
          </SwiperSlide>
        </Swiper>
        {/* 
        <div className="flex gap-[40px] items-center relative right-[100px]">
          <Image src={arrowR} width={36} height={36} alt="arrow" />
          <p className="text-[24px]">1/4</p>
          <Image src={arrowL} width={36} height={36} alt="arrow" />
        </div> */}
      </div>
    </div>
  );
}

export default WhyUs;
