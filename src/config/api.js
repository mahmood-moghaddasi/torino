import { getCookie, setCookie } from "@/utils/cookie";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6500/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    console.log(accessToken);
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginialRequest = error.config;
    if (error.response.status === 401 && !orginialRequest._retry) {
      orginialRequest._retry = true;

      const res = await getNewTokens();
      if (res?.response?.status === 201) {
        setCookie("accessToken", res?.response?.data.accessToken, 30);
        setCookie("refreshToken", res?.response?.data.refreshToken, 360);
        return api(orginialRequest);
      } else {
        // setCookie("accessToken", "", 0);
        // setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default api;

const getNewTokens = async () => {
  // const refreshToken = getCookie("refreshToken");
  // if (!refreshToken) return;
  // try {
  //   const response = await axios.post(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
  //     {
  //       refreshToken,
  //     }
  //   );
  //   return { response };
  // } catch (error) {
  //   return { error };
  // }
};
