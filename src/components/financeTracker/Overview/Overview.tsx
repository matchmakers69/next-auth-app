"use client";

import { Button } from "@/components/ui/Button";
import { CreateTransactionForm } from "../CreateTransactionForm";
import { useState } from "react";
import { differenceInDays, startOfMonth } from "date-fns";
import { TransactionType } from "../types";
import { OverviewProps } from "./defs";
import { StatsCards } from "../StatsCards";
import { CategoriesStats } from "../CategoriesStats";
import { CurrencyConverter } from "@/components/ui/CurrencyConverter";
import { useFetchCurrencyExchangeRatesQuery } from "@/reactQuery/hooks/useFetchCurrencyExchangeRates";
import { Loader2 } from "lucide-react";
import { defaultRates } from "@/lib/constants";

export default function Overview({ currency }: OverviewProps) {
  const {
    data: rates,
    error,
    isPending,
    isFetching,
  } = useFetchCurrencyExchangeRatesQuery();

  const [transactionType, setTransactionType] =
    useState<TransactionType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date(),
  });

  const openModal = (type: TransactionType) => {
    setTransactionType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTransactionType(null);
    setIsModalOpen(false);
  };

  const exchangeRates = rates || defaultRates;
  const isUsingFallbackRates = !!error;

  return (
    <>
      {isFetching && (
        <Loader2 size={30} className="mx-auto my-10 animate-spin" />
      )}
      {isPending ? (
        <h4>{"No rates to display yet"}</h4>
      ) : error ? (
        <h4>{"Error occured, service is not available"}</h4>
      ) : (
        <CurrencyConverter rates={rates} />
      )}

      <div className="buttons-wrapper flex w-full items-center justify-end gap-6">
        <Button
          onClick={() => openModal("income")}
          variant="primary"
          type="button"
          size="sm"
        >
          New income
        </Button>

        <Button onClick={() => openModal("expense")} type="button" size="sm">
          New expense
        </Button>
      </div>
      <div className="stats-card-container mb-[4rem]">
        <StatsCards
          currency={currency}
          from={dateRange.from}
          to={dateRange.to}
        />
      </div>

      <div className="categories-container flex w-full flex-col gap-2">
        <CategoriesStats
          currency={currency}
          from={dateRange.from}
          to={dateRange.to}
        />
      </div>

      {isModalOpen && transactionType === "income" && (
        <CreateTransactionForm
          type="income"
          open={isModalOpen}
          onClose={closeModal}
          userCurrency={currency}
          rates={exchangeRates}
          isUsingFallbackRates={isUsingFallbackRates}
        />
      )}

      {isModalOpen && transactionType === "expense" && (
        <CreateTransactionForm
          type="expense"
          open={isModalOpen}
          onClose={closeModal}
          userCurrency={currency}
          rates={exchangeRates}
          isUsingFallbackRates={isUsingFallbackRates}
        />
      )}
    </>
  );
}
