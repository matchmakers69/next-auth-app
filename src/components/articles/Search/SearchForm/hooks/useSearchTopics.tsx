import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import {
  SearchTopicsValues,
  searchValidationSchema,
} from "../validation/searchValidationSchema";

export const useSearchTopics = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<SearchTopicsValues>({
    resolver: zodResolver(searchValidationSchema),
    mode: "onSubmit",
    defaultValues: {
      topic: "",
    },
  });

  const handleSearchSubmit: SubmitHandler<SearchTopicsValues> = (values) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      console.log(values);
    });
  };

  const submitSearch = handleSubmit(handleSearchSubmit);

  return {
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
    submitSearch,
  };
};
