import React from "react";
import Banner from "@/components/atoms/Banner";
import Button_xxs from "@/components/atoms/buttons/Button_2xS";
import ToursList from "./ToursList";
import SearchBox from "./SearchBox";
import ContactBanner from "../organizations/ContactBanner";
import MoreFeatures from "./MoreFeatures";
import WhyUs from "./WhyUs";
import AuthForm from "./AuthForm";

export default function HomePage() {
  return (
    <div>
      <AuthForm />
      <Banner />
      <div className="px-[126px] flex flex-col items-center">
        <SearchBox />
        <ToursList />
        <ContactBanner />
        <WhyUs />
      </div>
      <MoreFeatures />
    </div>
  );
}
