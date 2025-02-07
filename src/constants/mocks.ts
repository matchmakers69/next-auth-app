import { v4 as uuidv4 } from "uuid";
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
