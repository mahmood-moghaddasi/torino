"use client";

import React from "react";
import PassengerInfoCard from "../organizations/PassengerInfoCard";
import BuyAndSubmitCard from "../organizations/BuyAndSubmitCard";
import { useCheckout } from "@/services/mutations";
import { useGetBasketData } from "@/services/queries";
import { dateSeparator } from "@/utils/helper";

function CartPage() {
  const { mutate } = useCheckout();
  const { data, isPending } = useGetBasketData();
  dateSeparator("2024-12-20T17:11:33.637Z");
  if (!isPending && !data) return "دیتا وجود ندارد";
  return (
    <div className="px-[126px] flex gap-4 w-full h-full bg-[#F3F3F3] pt-9 pb-[298px]">
      <PassengerInfoCard mutate={mutate} />
      <BuyAndSubmitCard data={data} isPending={isPending} />
    </div>
  );
}

export default CartPage;
