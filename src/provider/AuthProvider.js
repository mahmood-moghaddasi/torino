"use client";
import { useGetUserData } from "@/services/queries";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { loginFormContext } from "./LoginContextProvider";
import { toast } from "react-toastify";

function AuthProvider({ children, page }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();
  const { setShowLoginForm } = useContext(loginFormContext);
  useEffect(() => {
    if (!isPending && !data?.data && page === "checkout") {
      router.back();
      toast.success("وارد اکانت خود شوید");
    } else if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
      <p className=" m-auto bg-blue-100 text-blue-500 w-fit animate-ping">
        Loading...
      </p>
    );

  return children;
}

export default AuthProvider;
