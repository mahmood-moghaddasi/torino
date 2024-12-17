import React from "react";

function Button_3xL({ text, type }) {
  return (
    <button
      className="w-[491px] h-[54px] bg-primary-color rounded-[6px] text-white"
      type={type}
    >
      {text}
    </button>
  );
}

export default Button_3xL;
