"use client";
import React, { createContext, useState } from "react";
const loginFormContext = createContext();
function LoginContextProvider({ children }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <loginFormContext.Provider value={{ showLoginForm, setShowLoginForm }}>
      {children}
    </loginFormContext.Provider>
  );
}

export default LoginContextProvider;
export { loginFormContext };
