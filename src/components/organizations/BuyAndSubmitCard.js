import React from "react";

function BuyAndSubmitCard() {
  return (
    <div className="bg-white w-fit h-auto px-3 pb-3 flex flex-col justify-between  rounded-[10px]">
      <div className="divide-y-2">
        <div className="flex justify-between items-center pt-4 pb-6">
          <p className="text-[24px] font-semibold">اسم تور</p>
          <span className="text-[16px] text-text-color font-normal opacity-50">
            طول تور
          </span>
        </div>
        <div className="flex justify-between pt-[19px] pb-5">
          <p>قیمت نهایی</p>
          <span className="text-[28px] text-complementry-color font-medium ">
            155000
            <span className="text-[16px] text-text-color font-normal opacity-50">
              تومان
            </span>
          </span>
        </div>
      </div>
      <button className="w-[283px] h-14 bg-primary-color rounded-[10px] text-white text-[24px]">
        ثبت و خرید نهایی
      </button>
    </div>
  );
}

export default BuyAndSubmitCard;
