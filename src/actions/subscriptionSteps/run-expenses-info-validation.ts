"use server";

import { ExpenseInfoSchema } from "@/components/subscriptions/CreateSubscriptionContainer/CreateSubscriptionWizard/schemas/expenseInfoSchema";

interface ExpensesInfoState {
  errors: {
    price: string[];
    currency: string[];
    billing_period: string[];
    start_date: string[];
    next_payment: string[];
    _form: string[];
  };
  success: boolean;
}

type PartialErrorsExpensesInfoState = {
  errors?: Partial<ExpensesInfoState['errors']>;
  success?: boolean;
};

export async function runExpensesInfoValidation(
  prevState: PartialErrorsExpensesInfoState,
  formData: FormData,
): Promise<PartialErrorsExpensesInfoState> {
  const result = ExpenseInfoSchema.safeParse({
    price: formData.get("price"),
    currency: formData.get("currency"),
    billing_period: formData.get("billing_period"),
    start_date: formData.get("start_date"),
    next_payment: formData.get("next_payment"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return { success: true };
}
