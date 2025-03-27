import { Period, Timeframe } from "@/components/financeTracker/types";
import { getYearHistoryData } from "./get-year-history-dataApi";
import { getMonthHistoryData } from "./get-month-history-data";

export async function getTransactionsHistoryData(
  userId: string,
  timeframe: Timeframe,
  period: Period,
) {
  switch (timeframe) {
    case "year":
      return await getYearHistoryData(userId, period.year);
    case "month":
      return await getMonthHistoryData(userId, period.year, period.month);
  }
};

export type GetHistoryTransactionDataResponse = Awaited<ReturnType<typeof getTransactionsHistoryData>>;
