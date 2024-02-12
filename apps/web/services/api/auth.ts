import { axiosInstance } from "../axios/axiosInstance";
import { Auth, Login } from "../types/auth.type";

export const loginFn = async (data: Login): Promise<Auth> => {
  const response = await axiosInstance.post("/auth/login?isCookie=true", {
    email: data.email,
    password: data.password,
  });
  return response.data;
};
export const registerFn = async (data: Login): Promise<Auth> => {
  const response = await axiosInstance.post(
    "/auth/register?isCookie=true&isOauth=false",
    {
      email: data.email,
      password: data.password,
    }
  );
  return response.data;
};
