import { SUBSCRIPTION_BILLING_PERIOD } from "@prisma/client";

export const SUBSCRIPTION_BILLING_OPTIONS: SUBSCRIPTION_BILLING_PERIOD[] = [
  "MONTHLY",
  "YEARLY",
  "WEEKLY",
];

export const SUBSCRIPTION_CATEGORIES = [
  "ENTERNTAINMENT",
  "SPORT",
  "HOME",
  "CAR",
  "EDUCATION",
  "HOBBY",
];

export const CURRENCIES = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "PLN",
    label: "zł",
  },
];

export const CURRENCY = {
  EUR: "EUR",
  USD: "USD",
  GBP: "GBP",
  PLN: "PLN",
};
