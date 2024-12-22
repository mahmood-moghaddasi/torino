"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "@/images/Torino-logo.svg";
import arrow from "@/images/icons/arrow-down.svg";
import person from "@/images/icons/person.svg";

import Login_Button from "../atoms/Login_Button";
import { loginFormContext } from "@/provider/LoginContextProvider";
import { useRouter } from "next/navigation";
import { useGetUserData } from "@/services/queries";
import ProfileButtonMenu from "../organizations/ProfileButtonMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowLoginForm } = useContext(loginFormContext);
  const router = useRouter();
  console.log(router);
  const { data } = useGetUserData();
  console.log(data);
  return (
    <>
      <header className="w-screen pt-[15px] pb-3 px-[126px] h-[74px]  flex justify-between items-center shadow">
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
        <div className=" relative">
          {!data?.data ? (
            <Login_Button className="sm:hidden" onClick={setShowLoginForm} />
          ) : (
            <div
              className="flex flex-row-reverse gap-1 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image src={arrow} width={24} height={24} alt="arrow" />
              <p className="text-primary-color text-lg font-normal">
                {data.data.mobile}
              </p>
              <Image src={person} width={24} height={24} alt="person" />
            </div>
          )}
          {showMenu && <ProfileButtonMenu setShowMenu={setShowMenu} />}
        </div>
      </header>
    </>
  );
}

export default Header;
