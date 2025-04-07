import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import {
  NewPasswordFormValues,
  newPasswordSchema,
} from "../schemas/newPasswordSchema";
import { newPassword } from "@/app/(root)/(authentication)/auth/_actions/new-password";

export const useNewPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<NewPasswordFormValues>({
    mode: "onSubmit",
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const handleNewPasswordSubmit: SubmitHandler<NewPasswordFormValues> = (
    values,
  ) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      newPassword(values, token).then((data) => {
        if (data?.error) {
          reset();
          setError(data?.error);
        }

        if (data?.success) {
          reset();
          setSuccess(data.success);
        }
      });
    });
  };

  const newPasswordSubmit = handleSubmit(handleNewPasswordSubmit);

  return {
    newPasswordSubmit,
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
  };
};
