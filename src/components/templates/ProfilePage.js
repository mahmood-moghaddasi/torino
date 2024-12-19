import React from "react";
import PersonalInfoCard from "../organizations/PersonalInfoCard";

import UserAccInfoCard from "../organizations/UserAccInfoCard";
import BankAccInfoCard from "../organizations/BankAccInfoCard";

function ProfilePage() {
  return (
    <div className="flex flex-col w-full gap-6">
      <UserAccInfoCard />
      <PersonalInfoCard />
      <BankAccInfoCard />
    </div>
  );
}

export default ProfilePage;
