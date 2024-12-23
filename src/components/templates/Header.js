"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/images/Torino-logo.svg";
import Login_Button from "../atoms/Login_Button";
import { loginFormContext } from "@/provider/LoginContextProvider";
import { useRouter } from "next/navigation";

function Header() {
  const { setShowLoginForm } = useContext(loginFormContext);
  const router = useRouter();
  return (
    <>
      <header className="w-screen pt-[15px] pb-3 px-[126px] h-[74px] overflow-hidden flex justify-between items-center shadow">
        <div className="flex items-center gap-[84px]">
          <Image
            src={logo}
            width={146}
            height={44}
            alt="logo"
            onClick={() => router.push("/")}
          />
          <div className="flex gap-[18px] ">
            <p>صفحه اصلی</p>
            <p>خدمات گردشگری</p>
            <p>درباره ما</p>
            <p>تماس با ما</p>
          </div>
        </div>
        <Login_Button className="sm:hidden" onClick={setShowLoginForm} />
      </header>
    </>
  );
}

export default Header;
