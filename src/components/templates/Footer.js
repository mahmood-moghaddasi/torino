import Image from "next/image";
import React from "react";
import aira from "@/images/logos/aira-682b7c43.svg";
import samandeh from "@/images/logos/samandehi-6e2b448a.svg";
import onlineShop from "@/images/logos/ecunion-35c3c933.svg";
import planeOrg from "@/images/logos/home-desktop.svg";
import torino from "@/images/Torino-logo.svg";

function Footer() {
  return (
    <div>
      <div className="px-[126px] pb-[28px]  border-b">
        <div className="flex justify-between border-t pt-[21px] max-md:border-dashed max-md:flex-col max-md:items-center max-md:w-full">
          <div className="flex gap-[140px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] text-text-color font-medium font-yekan">
                تورینو
              </h3>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                درباره ما
              </p>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                تماس با ما
              </p>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                چرا تورینو
              </p>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                بیمه مسافرتی
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] text-text-color font-medium font-yekan">
                خدمات مشتریان
              </h3>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                پشتیبانی آنلاین
              </p>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                راهنمای خرید{" "}
              </p>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                راهنمای استرداد
              </p>
              <p className="text-[18px] text-text-color font-yekan font-normal">
                پرسش و پاسخ
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-end gap-5 max-md:flex-row-reverse
          max-md:items-center max-md:justify-between max-md:w-full"
          >
            <div
              className="flex max-md:flex-col 
            max-md:gap-3 max-md:items-end max-md:w-full "
            >
              <Image src={torino} width={146} height={44} alt="logo" />
              <p className="font-vazir font-normal text-[15px]">
                تلفن پشتیبانی :۸۵۴۷-۰۲۱
              </p>
            </div>
            <div className="flex justify-end max-md:items-start gap-6 max-md:flex-wrap">
              <Image src={aira} width={68} height={74} alt="logo" />
              <Image src={samandeh} width={67} height={74} alt="logo" />
              <Image src={onlineShop} width={68} height={74} alt="logo" />
              <Image src={planeOrg} width={78} height={74} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-3 ">
        <p className="font-yekan font-normal text-[15px]">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </div>
    </div>
  );
}

export default Footer;
