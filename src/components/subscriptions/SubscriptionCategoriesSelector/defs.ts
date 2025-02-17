import { SUBSCRIPTION_CATEGORY_LABEL } from "@prisma/client";

export type OptionType = {
  label: string;
  value: SUBSCRIPTION_CATEGORY_LABEL;
};

export type SubscriptionCategoriesSelectorProps = {
  value: SUBSCRIPTION_CATEGORY_LABEL;
  onChange: (_label: SUBSCRIPTION_CATEGORY_LABEL) => void;
};
