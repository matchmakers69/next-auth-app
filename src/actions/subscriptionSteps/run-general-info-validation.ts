"use server";

import { GeneralInfoSchema } from "@/components/subscriptions/CreateSubscriptionContainer/CreateSubscriptionWizard/schemas/generalInfoSchema";

interface GeneralInfoFormState {
  errors?: {
    name?: string[];
    category?: string[];
    avatarUrl?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function runGeneralInfoValidation(
  prevState: GeneralInfoFormState,
  formData: FormData,
): Promise<GeneralInfoFormState> {
  const result = GeneralInfoSchema.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    avatarUrl: formData.get("avatarUrl"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return { success: true };
}
