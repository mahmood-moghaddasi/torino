import { useQuery } from "@tanstack/react-query";

import api from "@/config/api";

const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};
const useGetUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};
const useGetUserTransaction = () => {
  const queryFn = () => api.get("user/transactions");
  const queryKey = ["user-transactions"];

  return useQuery({ queryFn, queryKey });
};
const useGetBasketData = () => {
  const queryFn = () => api.get("basket");
  const queryKey = ["user-basket"];

  return useQuery({ queryFn, queryKey });
};
export {
  useGetUserData,
  useGetUserTours,
  useGetUserTransaction,
  useGetBasketData,
};
