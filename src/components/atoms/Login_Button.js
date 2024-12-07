import Image from "next/image";
import React from "react";
import person from "@/images/icons/person.svg";
function Login_Button() {
  return (
    <button className="w-[166px] h-11 flex items-center justify-center rounded-lg border-2 border-primary-color text-primary-color ">
      <Image className="inline" src={person} />
      ورود | ثبت نام
    </button>
  );
}

export default Login_Button;
