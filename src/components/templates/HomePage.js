import React from "react";
import Banner from "@/components/atoms/Banner";
import Button_xxs from "@/components/atoms/buttons/Button_2xS";
import ToursList from "./ToursList";
import SearchBox from "./SearchBox";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <div className="px-[126px] flex flex-col items-center">
        <SearchBox />
        <ToursList />
      </div>
    </div>
  );
}