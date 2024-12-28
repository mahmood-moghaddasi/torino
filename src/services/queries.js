import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";
import api from "@/config/api";

const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];
  const onError = () => {
    window.location.reload();
  };

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
const useGetTours = (query) => {
  const url = "tour?" + QueryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};
export {
  useGetUserData,
  useGetUserTours,
  useGetUserTransaction,
  useGetBasketData,
  useGetTours,
};
