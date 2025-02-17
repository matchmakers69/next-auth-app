import {
  SUBSCRIPTION_BILLING_PERIOD,
  SUBSCRIPTION_CURRENCY,
} from "@prisma/client";

export const SubscriptionsStepsMapper = {
  generalInformation: "General information",
  expenseInformation: "Expense information",
  subscriptionSummary: "Subscription summary",
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
  price: number;
  currency: SUBSCRIPTION_CURRENCY;
  billingPeriod: SUBSCRIPTION_BILLING_PERIOD;
  next_payment: string;
  start_date: string;
};

export type SubscriptionStepValues = {
  subscriptionsGeneralInformation: SubscriptionGeneralInformation;
  expenseInformation: SubscriptionExpenseInformation;
};

export type FinalCreateSubscriptionStep = {
  onSubmit: (
    _stepValues: Pick<SubscriptionStepValues, "expenseInformation">,
  ) => void;
}; // TODO update this type when u get to last step
