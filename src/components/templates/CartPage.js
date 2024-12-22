import React from "react";
import PassengerInfoCard from "../organizations/PassengerInfoCard";
import BuyAndSubmitCard from "../organizations/BuyAndSubmitCard";

function CartPage() {
  return (
    <div className="px-[126px] flex gap-4 w-full h-full bg-[#F3F3F3] pt-9 pb-[298px]">
      <PassengerInfoCard />
      <BuyAndSubmitCard />
    </div>
  );
}

export default CartPage;
