import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createTopicSchema,
  CreateTopicValues,
} from "../validation/createTopicValidationSchema";

export const useCreateTopic = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<CreateTopicValues>({
    resolver: zodResolver(createTopicSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return {
    control,
    reset,
    errors,
    isDirty,
    isSubmitting,
    handleSubmit,
  };
};
