"use client";
import React, { createContext, useState } from "react";
const sidebarContext = createContext();
function SidebarContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <sidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </sidebarContext.Provider>
  );
}

export default SidebarContextProvider;
export { sidebarContext };
