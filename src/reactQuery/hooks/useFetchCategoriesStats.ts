import { ApiClient } from "@/services/ApiClient";
import { DateToUTCDate } from "@/utils/dates";
import { queryOptions, useQuery } from "@tanstack/react-query";

const fetchCategoriesStats = async (from: Date, to: Date) => {
  return await ApiClient(`/finance-tracker/stats/categories?from=${DateToUTCDate(from)}&to=${DateToUTCDate(to)}`).getFinanceTrackerStatsCategories();
}

export const categoriesStatsQuery = (from: Date, to: Date) =>
  queryOptions({
    queryKey: ["budget-stats", "stats", "categories", from, to],
    queryFn: () => fetchCategoriesStats(from, to),
    staleTime: 1000 * 15,
  });

export const useFetchCategoriesStatsQuery = (from: Date, to: Date) => {
  return useQuery(categoriesStatsQuery(from, to));
};