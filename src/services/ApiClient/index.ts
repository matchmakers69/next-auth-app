import { requests } from "@/config/axios";
import { BalanceStatsType, SubscriptionCategories } from "../../types";

export const ApiClient = (url: string) => {
  return {
    getSubscriptionCategories: (): Promise<SubscriptionCategories[]> =>
      requests.get(url),
    getFinanceTrackerStatsBalance: (): Promise<BalanceStatsType> =>
      requests.get(url),
  };
};
