import { useMutation } from "@tanstack/react-query";
import { loginFn, registerFn } from "../api";
import cacheKey from "../cacheKeys";
import { Login } from "../types/auth.type";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (data: Login) => await loginFn(data),
    mutationKey: [cacheKey.auth.LOGIN],
  });
}
export function useRegisterMutation() {
  return useMutation({
    mutationFn: async (data: Login) => await registerFn(data),
    mutationKey: [cacheKey.auth.REGISTER],
  });
}
