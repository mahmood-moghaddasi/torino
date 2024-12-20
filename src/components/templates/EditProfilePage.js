"use client";
import EditPersonalInfo from "../organizations/EditPersonalInfo";
import EditBankAccInfo from "../organizations/EditBankAccInfo";
import EditUserAccInfo from "../organizations/EditUserAccInfo";
import { useEffect, useState } from "react";
import { useUserProfile } from "@/services/mutations";
import { useRouter } from "next/navigation";
import { useGetUserData } from "@/services/queries";

function EditProfilePage() {
  const [form, setForm] = useState({
    mobile: 0,
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    nationalCode: 0,
    payment: {
      shaba_code: "",
      debitCard_code: "",
      accountIdentifier: "",
    },
  });
  const router = useRouter();

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
  const { data } = useGetUserData();
  const { mutate, isPending } = useUserProfile();
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
  useEffect(() => {
    setForm(data.data.form || form);
  }, [data?.data?.form]);
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
