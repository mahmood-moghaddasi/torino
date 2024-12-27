import AuthProvider from "@/provider/AuthProvider";
import React from "react";

function CartLayout({ children }) {
  return <AuthProvider page="checkout">{children}</AuthProvider>;
}

export default CartLayout;
