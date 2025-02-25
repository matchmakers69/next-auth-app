import { ApiClient } from "@/services/ApiClient";
import { Budget } from "@/types";
import { queryOptions, useQuery } from "@tanstack/react-query";

const getBudgetData = async () => {
  const response = await ApiClient("/budget").getFinanceTrackerBudget();
  return response;
};

export const budgetQuery = queryOptions({
  queryKey: ["budget"],
  queryFn: getBudgetData,
  staleTime: 1000 * 15,
});

export const useGetBudgetQuery = () => {
  return useQuery({
    ...budgetQuery,
    select: (data) =>
      data.map((budget: Budget) => ({
        category: budget.attributes.category,
        amount: budget.attributes.amount,
      })),
  });
};
