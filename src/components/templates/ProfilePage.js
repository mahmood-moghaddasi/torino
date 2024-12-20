"use client";
import React from "react";
import PersonalInfoCard from "../organizations/PersonalInfoCard";

import UserAccInfoCard from "../organizations/UserAccInfoCard";
import BankAccInfoCard from "../organizations/BankAccInfoCard";
import { useGetUserData } from "@/services/queries";

function ProfilePage() {
  const { data, isPending } = useGetUserData();
  if (isPending)
    return (
      <div className="flex flex-col w-full gap-6">
        <p className="text-5xl text-complementry-color animate-ping">Loading</p>
      </div>
    );
  return (
    <div className="flex flex-col w-full gap-6">
      <UserAccInfoCard user={data} />
      <PersonalInfoCard user={data} />
      <BankAccInfoCard user={data} />
    </div>
  );
}

export default ProfilePage;
