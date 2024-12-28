import Image from "next/image";
import React from "react";
import person from "@/images/icons/person.svg";
import login from "@/images/icons/login.svg";

function Login_Button({ onClick }) {
  return (
    <>
      <button
        onClick={() => onClick(true)}
        className="w-10 h-10 hidden  items-center justify-center rounded-lg border-2 border-primary-color text-primary-color max-lg:flex "
      >
        <Image className="inline" src={login} width={24} height={24} />
      </button>
      <button
        onClick={() => onClick(true)}
        className="w-[166px] h-11 flex items-center justify-center rounded-lg border-2 border-primary-color text-primary-color max-lg:hidden "
      >
        <Image className="inline" src={person} />
        ورود | ثبت نام
      </button>
    </>
  );
}

export default Login_Button;
