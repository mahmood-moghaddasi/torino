import Image from "next/image";

function CalenderSelector({ clickHandler }) {
  return (
    <div className="flex gap-2  pr-[18px]">
      <Image
        src={calender}
        width={20}
        height={20}
        alt="calender"
        onClick={clickHandler}
      />
      <input placeholder="تاریخ" className="border-none outline-none" />
    </div>
  );
}

export default CalenderSelector;
