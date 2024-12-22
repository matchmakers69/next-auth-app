import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetPassword } from "@/actions/reset-password";
import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from "../schemas/resetPasswordSchema";

export const useResetPassword = () => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmitResetPassword: SubmitHandler<ResetPasswordFormValues> = (
    values,
  ) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      resetPassword(values)
        .then((data) => {
          if (data?.error) {
            reset();
            setError(data.error);
          }
          if (data?.success) {
            reset();
            setSuccess(data.success);
          }
        })
        .catch((error) => {
          console.error("Reset password error:", error);
          setError("Unexpected error occurred during password reset.");
        });
    });
  };

  const submitPasswordReset = handleSubmit(handleSubmitResetPassword);

  return {
    submitPasswordReset,
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
  };
};
