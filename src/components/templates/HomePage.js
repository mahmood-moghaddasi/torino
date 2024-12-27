import React from "react";
import Banner from "@/components/atoms/Banner";
import Button_xxs from "@/components/atoms/buttons/Button_2xS";
import ToursList from "./ToursList";
import SearchBox from "./SearchBox";
import ContactBanner from "../organizations/ContactBanner";
import MoreFeatures from "./MoreFeatures";
import WhyUs from "./WhyUs";
import AuthForm from "./AuthForm";
import { serverFetch } from "@/services/http";

export default async function HomePage({ searchParams }) {
  const data = await serverFetch("tour", searchParams, {
    cache: "no-store",
  });
  return (
    <div>
      <Banner />
      <div className=" px-[126px] flex flex-col items-center">
        <SearchBox />
        <ToursList tours={data} />
        <ContactBanner />
        <WhyUs />
      </div>
      <MoreFeatures />
    </div>
  );
}
