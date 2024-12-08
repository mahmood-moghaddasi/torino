import React from "react";
import LocationSelector from "../molecules/LocationSelector";
import CalenderSelector from "../molecules/CalenderSelector";
import Button_L from "../atoms/buttons/Button_L";

function SearchBox() {
  return (
    <div className=" w-fit h-auto mt-[17px] flex flex-col gap-[28px] ">
      <h1 className="text-[28px] text-center">
        <span className="text-primary-color">تورینو </span>برگزار کننده بهترین
        تور های داخلی و خارجی
      </h1>
      <div className="flex border rounded-[20px] py-[7.5px] pr-[2px] pl-[10px]">
        <div className="flex w-auto ">
          <LocationSelector />
          <LocationSelector />
          <CalenderSelector />
        </div>
        <Button_L text={"جستجو"} />
      </div>
    </div>
  );
}

export default SearchBox;
