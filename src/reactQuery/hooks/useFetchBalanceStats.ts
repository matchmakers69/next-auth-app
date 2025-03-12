import { ApiClient } from "@/services/ApiClient";
import { DateToUTCDate } from "@/utils/dates";
import { queryOptions, useQuery } from "@tanstack/react-query";

const fetchBudgetStats = async (from: Date, to: Date) => {
  return await ApiClient(
    `/finance-tracker/stats/balance?from=${DateToUTCDate(from)}&to=${DateToUTCDate(to)}`,
  ).getFinanceTrackerStatsBalance();
};

export const budgetStatsQuery = (from: Date, to: Date) =>
  queryOptions({
    queryKey: ["budget-stats", "stats", from, to],
    queryFn: () => fetchBudgetStats(from, to),
    staleTime: 1000 * 15,
  });

export const useFetchBalanceStatsQuery = (from: Date, to: Date) => {
  return useQuery(budgetStatsQuery(from, to));
};
