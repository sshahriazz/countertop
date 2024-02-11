"use client";
import { Register } from "@web/services/types/auth.type";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerValidationSchema } from "@web/validation-schemas/auth";
import { useRegisterMutation } from "@web/services/mutation/auth.mutation";
import storage from "react-secure-storage";

function RegisterForm() {
  const registerMutation = useRegisterMutation();
  const loginForm = useForm<Register>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: joiResolver(registerValidationSchema),
  });
  const submitRegisterForm: SubmitHandler<Register> = (data) => {
    registerMutation.mutate(data);
    if (registerMutation.isSuccess) {
      console.log("Register", registerMutation.data);
      storage.setItem("accessToken", registerMutation.data.tokens.accessToken);
      storage.setItem(
        "refreshToken",
        registerMutation.data.tokens.refreshToken
      );
    }
  };
  return (
    <form onSubmit={loginForm.handleSubmit(submitRegisterForm)}>
      <p>{registerMutation.isError && "Invalid credentials"}</p>
      <input type="email" {...loginForm.register("email")} />
      <input type="password" {...loginForm.register("password")} />
      <input
        type="confirmPassword"
        {...loginForm.register("confirmPassword")}
      />
      <button type="submit">
        {registerMutation.isPending ? "Loading" : "Register"}
      </button>
    </form>
  );
}
export default RegisterForm;
