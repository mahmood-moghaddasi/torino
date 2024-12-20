import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";

const useSendOTP = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};
const useCheckOTP = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);
  return useMutation({ mutationFn });
};

const useUserProfile = () => {
  const mutationFn = (data) => api.put("user/profile", data);
  return useMutation({ mutationFn });
};
export { useSendOTP, useCheckOTP, useUserProfile };
