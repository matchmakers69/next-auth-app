"use client";

import { useFetchBalanceStatsQuery } from "@/reactQuery/hooks/useFetchBalanceStats";
import { StatsCardsProps } from "./defs";
import { SkeletonWrapper } from "@/components/ui/Skeleton/SkeletonWrapper";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { StatCard } from "./StatCard";

const StatsCards = ({ from, to }: StatsCardsProps) => {
  const statsQuery = useFetchBalanceStatsQuery(
    from || new Date(),
    to || new Date(),
  );
  const income = statsQuery.data?.income || 0;
  const expense = statsQuery.data?.expense || 0;

  const balance = income - expense;
  return (
    <div className="relative mt-[4rem] grid grid-cols-1 grid-rows-1 gap-[3.06rem] gap-y-[2.5rem] rounded-[7px] sm:grid-cols-2 sm:gap-[2.6rem] md:grid-cols-3 md:gap-[3.06rem]">
      <SkeletonWrapper isLoading={statsQuery.isFetching}>
        <StatCard
          value={income}
          title="Income"
          icon={
            <TrendingUp className="h-20 w-20 items-center rounded-lg bg-emerald-400/10 p-2 text-emerald-400" />
          }
        />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={statsQuery.isFetching}>
        <StatCard
          value={expense}
          title="Expense"
          icon={
            <TrendingDown className="h-20 w-20 items-center rounded-lg bg-red-400/10 p-2 text-red-400" />
          }
        />
      </SkeletonWrapper>
      <SkeletonWrapper isLoading={statsQuery.isFetching}>
        <StatCard
          value={balance}
          title="Balance"
          icon={
            <Wallet className="h-20 w-20 items-center rounded-lg bg-violet-400/10 p-2 text-violet-400" />
          }
        />
      </SkeletonWrapper>
    </div>
  );
};

export default StatsCards;
