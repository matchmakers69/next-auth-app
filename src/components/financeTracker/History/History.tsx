"use client";

import { useState } from "react";
import { CardWithoutBck } from "@/components/ui/CardWithoutBck";
import CountUp from "react-countup";
import { HistoryProps } from "./defs";
import { useFetchTransactionsHistoryQuery } from "@/reactQuery/hooks/useFetchTransactionsHistoryQuery";
import { Period, Timeframe } from "../types";
import { Badge } from "@/components/ui/Badge";
import { SkeletonWrapper } from "@/components/ui/Skeleton/SkeletonWrapper";

export default function History({ currency }: HistoryProps) {
  const [timeframe, setTimeframe] = useState<Timeframe>("month");

  const [period, setPeriod] = useState<Period>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const {
    data: transactionsHistory,
    isFetching,
    error,
  } = useFetchTransactionsHistoryQuery(timeframe, period);

  if (error) {
    return <div>{error.message ?? "Cannot fetch user's currencies"}</div>;
  }

  const availableTransactionsHistory =
    transactionsHistory && transactionsHistory?.length > 0;
  return (
    <>
      <h2 className="mb-8 text-[2.4rem] font-semibold md:text-[2.8rem]">
        History of all transactions
      </h2>
      <CardWithoutBck className="border border-dark-border bg-[hsla(0,0%,100%,0.05)] p-10 sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%]">
        <div className="card-wrapper flex w-full flex-col gap-2">
          <header className="card-header grid w-full grid-flow-row justify-between gap-2 md:grid-flow-col">
            <div className="history-selector-wrapper">Select here</div>
            <div className="flex h-10 gap-2">
              <Badge
                variant={"outline"}
                className="flex items-center gap-2 text-sm"
              >
                <div className="h-4 w-4 rounded-full bg-emerald-500"></div>
                <span className="text-sm">Income</span>
              </Badge>
              <Badge
                variant={"outline"}
                className="flex items-center gap-2 text-sm"
              >
                <div className="h-4 w-4 rounded-full bg-red-500"></div>
                <span className="text-sm">Expense</span>
              </Badge>
            </div>
          </header>
          <div className="card-content w-full">
            <SkeletonWrapper isLoading={isFetching}>
              {availableTransactionsHistory && <div>Data here</div>}
            </SkeletonWrapper>
          </div>
        </div>
      </CardWithoutBck>
    </>
  );
}
