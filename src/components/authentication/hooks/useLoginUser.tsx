import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../schemas/loginSchema";
import { signIn } from "@/actions/signIn";
import { useRouter } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";

export const useLoginUser = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? `Email already in use. Please login with form.`
      : "";
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  const handleLoginSubmit: SubmitHandler<LoginFormValues> = (values) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      signIn(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            setShowTwoFactor(false);
            reset();
            setError(data.error ?? "Something went wrong with your login!");
          }
          if (data?.success) {
            reset();
            setSuccess("Congrats! You are now logged in!");
            router.push(DEFAULT_LOGIN_REDIRECT);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch((error) => {
          console.error("Login error:", error);
          setError("Unexpected error occurred during login.");
        });
    });
  };

  const submitLogin = handleSubmit(handleLoginSubmit);

  return {
    submitLogin,
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
    urlError,
    showTwoFactor,
  };
};
