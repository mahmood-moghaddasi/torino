"use client";
import React, { useState } from "react";

import SendOTPForm from "../organizations/SendOTPForm";
import CheckOTPForm from "../organizations/CheckOTPForm";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-30 backdrop-blur-sm bg-black/40 h-svh w-svw flex items-center justify-center">
      {step === 2 ? (
        <SendOTPForm setMobile={setMobile} mobile={mobile} setStep={setStep} />
      ) : (
        <CheckOTPForm mobile={mobile} setStep={setStep} />
      )}
    </div>
  );
}

export default AuthForm;
