import { requests } from "@/config/axios";
import { BalanceStatsType, CategoriesStatsType, SubscriptionCategories } from "../../types";


export const ApiClient = (url: string) => {
  return {
    getSubscriptionCategories: (): Promise<SubscriptionCategories[]> =>
      requests.get(url),
    getFinanceTrackerStatsBalance: (): Promise<BalanceStatsType> =>
      requests.get(url),
    getFinanceTrackerStatsCategories: (): Promise<CategoriesStatsType> =>
      requests.get(url),
  };
};
