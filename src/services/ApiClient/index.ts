import { requests } from "@/config/axios";
import { Budget, SubscriptionCategories } from "../../types";

export const ApiClient = (url: string) => {
  return {
    getSubscriptionCategories: (): Promise<SubscriptionCategories[]> =>
      requests.get(url),
    getFinanceTrackerBudget: (): Promise<Budget[]> => requests.get(url),
  };
};
