import AuthProvider from "@/provider/AuthProvider";
import React from "react";

function PaymentLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default PaymentLayout;
