"use client";
import EditPersonalInfo from "../organizations/EditPersonalInfo";
import EditBankAccInfo from "../organizations/EditBankAccInfo";
import EditUserAccInfo from "../organizations/EditUserAccInfo";
import { useState } from "react";
import { useUserProfile } from "@/services/mutations";
import { useRouter } from "next/navigation";

function EditProfilePage() {
  const [form, setForm] = useState({
    mobile: 0,
    email: "",
    firstName: "mahmood",
    lastName: "moghadasi",
    gender: "malw",
    birthDate: "2022-10-02",
    nationalCode: 0,
    payment: {
      shaba_code: "32232",
      debitCard_code: "322323",
      accountIdentifier: "",
    },
  });
  const router = useRouter();
  console.log(form);
  const formHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
      mobile: "09179589395",
      payment: { ...form.payment, [name]: value },
    });
  };
  const { mutate, isPending } = useUserProfile();
  const all = useUserProfile();
  console.log(all);
  const submitHandler = () => {
    if (isPending) return;
    mutate(
      { form },
      {
        onSuccess: (response) => {
          console.log(response);
          router.push("/profile");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <div className="w-full flex flex-col gap-[19px] mb-[154px]">
      <EditUserAccInfo
        submitHandler={submitHandler}
        formHandler={formHandler}
        form={form}
      />
      <EditPersonalInfo
        submitHandler={submitHandler}
        formHandler={formHandler}
        form={form}
      />
      <EditBankAccInfo
        submitHandler={submitHandler}
        formHandler={formHandler}
        form={form}
      />
    </div>
  );
}

export default EditProfilePage;
