"use client";
import { Login } from "@web/services/types/auth.type";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginValidationSchema } from "@web/validation-schemas/auth";
import { useLoginMutation } from "@web/services/mutation/auth.mutation";
import storage from "react-secure-storage";

function LoginForm() {
  const loginMutation = useLoginMutation();
  const loginForm = useForm<Login>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(loginValidationSchema),
  });
  const submitLoginForm: SubmitHandler<Login> = (data) => {
    loginMutation.mutate(data);
    if (loginMutation.isSuccess) {
      console.log("Login", loginMutation.data);
      storage.setItem("accessToken", loginMutation.data.tokens.accessToken);
      storage.setItem("refreshToken", loginMutation.data.tokens.refreshToken);
    }
  };
  return (
    <form onSubmit={loginForm.handleSubmit(submitLoginForm)}>
      <p>{loginMutation.isError && "Invalid credentials"}</p>
      <input type="email" {...loginForm.register("email")} />
      <input type="password" {...loginForm.register("password")} />
      <button type="submit">
        {loginMutation.isPending ? "Loading" : "Login"}
      </button>
    </form>
  );
}
export default LoginForm;
