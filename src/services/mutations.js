import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";

const useSendOTP = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};
const useCheckOTP = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onSuccess });
};

const useUserProfile = () => {
  const mutationFn = (data) => api.put("user/profile", data);
  return useMutation({ mutationFn });
};
export { useSendOTP, useCheckOTP, useUserProfile };
