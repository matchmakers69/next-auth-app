import {
  SUBSCRIPTION_BILLING_PERIOD,
  SUBSCRIPTION_CURRENCY,
} from "@prisma/client";

export const SubscriptionsStepsMapper = {
  generalInformation: "General information",
  expenseInformation: "Expense information",
} as const;

// We want to get union of all keys of SubscriptionsSteps

export type SubscriptionsStepValue =
  (typeof SubscriptionsStepsMapper)[keyof typeof SubscriptionsStepsMapper];

export type SubscriptionsStepKey = keyof typeof SubscriptionsStepsMapper;

export type SubscriptionGeneralInformation = {
  name: string;
  category: string;
  avatarUrl?: string;
};

export type SubscriptionExpenseInformation = {
  cost: number;
  currency: SUBSCRIPTION_CURRENCY;
  billingPeriod: SUBSCRIPTION_BILLING_PERIOD;
  nextPaymentDate: string;
};

export type SubscriptionStepValues = {
  subscriptionsGeneralInformation: SubscriptionGeneralInformation;
  expenseInformation: SubscriptionExpenseInformation;
};

export type FinalCreateSubscriptionStep = {
  onSubmit: (stepValues: Pick<SubscriptionStepValues, "expenseInformation">) => void
}
