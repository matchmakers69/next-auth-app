import { requests } from "@/config/axios";
import { SubscriptionCategories } from "../../types";


export const ApiClient = (url: string) => {
  return {
    getSubscriptionCategories: (): Promise<SubscriptionCategories[]> =>
      requests.get(url),
  };
};
