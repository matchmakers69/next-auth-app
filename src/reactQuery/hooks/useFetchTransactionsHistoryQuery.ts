import { Period, Timeframe } from "@/components/financeTracker/types";
import { ApiClient } from "@/services/ApiClient";
import { queryOptions, useQuery } from "@tanstack/react-query";

const fetchTransactionsHistoryData = async (
  timeframe: Timeframe,
  period: Period,
) => {
  return await ApiClient(
    `/finance-tracker/history-data?timeframe=${timeframe}&year=${period.year}&month=${period.month}`,
  ).getTransactionsHistory();
};

export const transactionsHistoryQuery = (
  timeframe: Timeframe,
  period: Period,
) =>
  queryOptions({
    queryKey: ["overview", "history", timeframe, period],
    queryFn: () => fetchTransactionsHistoryData(timeframe, period),
    staleTime: 1000 * 15,
  });

export const useFetchTransactionsHistoryQuery = (
  timeframe: Timeframe,
  period: Period,
) => {
  return useQuery(transactionsHistoryQuery(timeframe, period));
};
