// "use client";
import axios from "axios";
import storage from "react-secure-storage";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://some.com/"
    : "http://localhost:4000/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const privateApi = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

privateApi.interceptors.request.use(
  (config) => {
    const accessToken = storage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (response) => response
);

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (storage.getItem("accessToken") === null) {
        return Promise.reject(error);
      }
      const rt = storage.getItem("refreshToken");
      const response = await privateApi.get(`/auth/refresh-token?rt=${rt}`);
      if (response.status === 200) {
        storage.setItem("accessToken", response.data.accessToken);
        storage.setItem("refreshToken", response.data.refreshToken);
        window.dispatchEvent(new Event("storage"));
        return privateApi(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export { axiosInstance, privateApi };
