import Image from "next/image";
import React from "react";
import logo from "@/images/Torino-logo.svg";
import Login_Button from "../atoms/Login_Button";
function Header() {
  return (
    <>
      <header className="w-screen pt-[15px] pb-3 px-[126px] h-[74px] overflow-hidden flex justify-between items-center ">
        <div className="flex items-center gap-[84px]">
          <Image src={logo} width={146} height={44} alt="logo" />
          <div className="flex gap-[18px]  ">
            <p>صفحه اصلی</p>
            <p>خدمات گردشگری</p>
            <p>درباره ما</p>
            <p>تماس با ما</p>
          </div>
        </div>
        <Login_Button className="sm:hidden" />
      </header>
    </>
  );
}

export default Header;
