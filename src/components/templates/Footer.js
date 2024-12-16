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
        <div className="flex justify-between border-t pt-[21px] ">
          <div className="flex gap-[140px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] text-text-color font-medium">
                تورینو
              </h3>
              <p className="text-[18px] text-text-color">درباره ما</p>
              <p className="text-[18px] text-text-color">تماس با ما</p>
              <p className="text-[18px] text-text-color">چرا تورینو</p>
              <p className="text-[18px] text-text-color">بیمه مسافرتی</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[24px] text-text-color font-medium">
                خدمات مشتریان
              </h3>
              <p className="text-[18px] text-text-color">پشتیبانی آنلاین</p>
              <p className="text-[18px] text-text-color">راهنمای خرید </p>
              <p className="text-[18px] text-text-color">راهنمای استرداد</p>
              <p className="text-[18px] text-text-color">پرسش و پاسخ</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-5">
            <Image src={torino} width={146} height={44} alt="logo" />
            <p className="">تلفن پشتیبانی :۸۵۴۷-۰۲۱</p>
            <div className="flex justify-end gap-6">
              <Image src={aira} width={68} height={74} alt="logo" />
              <Image src={samandeh} width={67} height={74} alt="logo" />
              <Image src={onlineShop} width={68} height={74} alt="logo" />
              <Image src={planeOrg} width={78} height={74} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-3 ">
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </div>
  );
}

export default Footer;
