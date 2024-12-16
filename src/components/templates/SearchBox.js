"use client";
import React, { useState } from "react";
import LocationSelector from "../molecules/LocationSelector";
import CalenderSelector from "../molecules/CalenderSelector";
import Button_L from "../atoms/buttons/Button_L";
import { Calendar, CalendarProvider } from "zaman";

function SearchBox() {
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState("hidden");
  const clickHandler = () => {
    if (showCalendar === "") return setShowCalendar("hidden");
    setShowCalendar("");
  };
  return (
    <div className="h-[71px]">
      <div className=" w-fit h-auto mt-[17px] flex flex-col gap-[28px] ">
        <h1 className="text-[28px] text-center">
          <span className="text-primary-color">تورینو </span>برگزار کننده بهترین
          تور های داخلی و خارجی
        </h1>
        <div className="flex border rounded-[20px] py-[7.5px] pr-[2px] pl-[10px]">
          <div className="flex w-auto ">
            <LocationSelector />
            <LocationSelector />
            <CalenderSelector clickHandler={clickHandler} />
          </div>
          <Button_L text={"جستجو"} />
        </div>
      </div>
      <CalendarProvider accentColor="#28A745" round="x2">
        <Calendar
          defaultValue={calendarValue}
          onChange={(e) => setCalendarValue(new Date(e.value))}
          className={`fixed right-96  ${showCalendar}  z-20 `}
        />
      </CalendarProvider>
    </div>
  );
}

export default SearchBox;
