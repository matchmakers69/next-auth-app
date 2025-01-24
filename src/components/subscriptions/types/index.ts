export const SubscriptionsStepsMapper = {
  generalInformation: "General information",
  expenseInformation: "Expense information",
} as const;

// We want to get union of all keys of SubscriptionsSteps

export type SubscriptionsStepValue =
  (typeof SubscriptionsStepsMapper)[keyof typeof SubscriptionsStepsMapper];

  export type SubscriptionsStepKey = keyof typeof SubscriptionsStepsMapper;