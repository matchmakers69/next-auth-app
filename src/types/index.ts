import { getBalanceStats } from "@/lib/getBalanceStatsAPI";
import { getCategoriesStats } from "@/lib/getCategoriesStatsAPI";
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

export type BalanceStatsType = Awaited<ReturnType<typeof getBalanceStats>>;
export type CategoriesStatsType = Awaited<ReturnType<typeof getCategoriesStats>>;
export type ExchangeRates = {
  success: boolean,
  timestamp: number,
  base: string,
  date: string,
  rates: Record<string, number>;
}