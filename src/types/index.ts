import { SUBSCRIPTION_CATEGORY_LABEL } from "@prisma/client";

export type SubscriptionCategories = {
  id: string;
  label: SUBSCRIPTION_CATEGORY_LABEL;
};

export type Base = {
  title: string;
  description: string;
  href?: string;
};

export type Post = Base & {
  // Not defined for third party posts
  slug: string | undefined;
  date: string;
  tags: string[];
  body: string;
  lastModified?: number;
  views?: number;
  // Third party only
  isThirdParty?: boolean;
  type: "post";
};
