import { ApiClient } from "@/services/ApiClient";
import { queryOptions, useQuery } from "@tanstack/react-query";

const getSubscriptionCategories = async () => {
  return await ApiClient(
    "/subscription-categories",
  ).getSubscriptionCategories();
};

export const subscriptionCategoriesQuery = queryOptions({
  queryKey: ["subscription-categories"],
  queryFn: getSubscriptionCategories,
  staleTime: 1000 * 15,
});

export const useGetSubscriptionCategoriesQuery = () => {
  return useQuery(subscriptionCategoriesQuery);
};
