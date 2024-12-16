import React from "react";

function ModalContainer({ children, closeHandler }) {
  return (
    <div
      className="fixed top-0 left-0 h-svh w-svw bg-black/80 z-30"
      onClick={() => closeHandler(false)}
    >
      {children}
    </div>
  );
}

export default ModalContainer;
