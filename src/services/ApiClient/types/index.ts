import { SUBSCRIPTION_CATEGORY_LABEL } from "@prisma/client";

export type SubscriptionCategories = {
  id: string;
  label: SUBSCRIPTION_CATEGORY_LABEL;
};
