import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import {
  RegisterFormValues,
  registerSchema,
} from "../schemas/registrationSchema";
import { signUp } from "@/actions/signUp";

export const useRegisterUser = () => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleRegisterUser: SubmitHandler<RegisterFormValues> = (data) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      signUp(data).then((data) => {
        setSuccess(data.success);
        setError(data.error);
      });
    });
    reset();
  };

  const submitSignUpUser = handleSubmit(handleRegisterUser);

  return {
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
    submitSignUpUser,
  };
};
