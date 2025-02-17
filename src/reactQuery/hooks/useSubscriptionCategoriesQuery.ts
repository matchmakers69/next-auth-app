import { ApiClient } from "@/services/ApiClient";
import { queryOptions, useQuery } from "@tanstack/react-query";

const getSubscriptionCategories = async () => {
  const response = await ApiClient(
    "/subscription-categories",
  ).getSubscriptionCategories();
  return response;
};

export const subscriptionCategoriesQuery = queryOptions({
  queryKey: ["subscription-categories"],
  queryFn: getSubscriptionCategories,
  staleTime: 1000 * 15,
});

export const useGetSubscriptionCategoriesQuery = () => {
  return useQuery(subscriptionCategoriesQuery);
};
