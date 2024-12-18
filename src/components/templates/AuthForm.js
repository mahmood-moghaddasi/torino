"use client";
import React, { useState, useContext } from "react";

import SendOTPForm from "../organizations/SendOTPForm";
import CheckOTPForm from "../organizations/CheckOTPForm";
import { loginFormContext } from "@/provider/LoginContextProvider";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const { showLoginForm, setShowLoginForm } = useContext(loginFormContext);

  return (
    <>
      {showLoginForm ? (
        <div className="fixed top-0 left-0 z-30 backdrop-blur-sm bg-black/40 h-svh w-svw flex items-center justify-center">
          {step === 1 ? (
            <SendOTPForm
              setMobile={setMobile}
              mobile={mobile}
              setStep={setStep}
              setShowLoginForm={setShowLoginForm}
            />
          ) : (
            <CheckOTPForm
              mobile={mobile}
              setStep={setStep}
              setShowLoginForm={setShowLoginForm}
            />
          )}
        </div>
      ) : null}
    </>
  );
}

export default AuthForm;
