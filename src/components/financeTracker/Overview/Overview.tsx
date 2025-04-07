"use client";

import { Button } from "@/components/ui/Button";
import { CreateTransactionForm } from "../CreateTransactionForm";
import { useState } from "react";
import { differenceInDays, startOfMonth } from "date-fns";
import { TransactionType } from "../types";
import { OverviewProps } from "./defs";
import { StatsCards } from "../StatsCards";
import { CategoriesStats } from "../CategoriesStats";
import { useFeatureSwitcher } from "@/hooks/useFeatureSwitcher";
import { useCurrencyExchangeRates } from "@/hooks/useCurrencyExchangeRates";

export default function Overview({ currency }: OverviewProps) {
  const { rates, isUsingFallbackRates } = useCurrencyExchangeRates();

  const [transactionType, setTransactionType] =
    useState<TransactionType | null>(null);
  const modalFeature = useFeatureSwitcher();

  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date(),
  });

  const handleOpenTransactionModal = (type: TransactionType) => {
    setTransactionType(type);
    modalFeature.on();
  };

  const handleCloseTransactionModal = () => {
    setTransactionType(null);
    modalFeature.off();
  };

  const exchangeRates = rates;

  return (
    <>
      <div className="buttons-wrapper flex w-full items-center justify-end gap-6">
        <Button
          onClick={() => handleOpenTransactionModal("income")}
          variant="primary"
          type="button"
          size="sm"
        >
          New income
        </Button>

        <Button
          onClick={() => handleOpenTransactionModal("expense")}
          type="button"
          size="sm"
        >
          New expense
        </Button>
      </div>
      <div className="stats-card-container mb-[4rem]">
        <StatsCards
          selectedCurrency={currency}
          from={dateRange.from}
          to={dateRange.to}
        />
      </div>

      <div className="categories-container flex w-full flex-col gap-2">
        <CategoriesStats
          selectedCurrency={currency}
          from={dateRange.from}
          to={dateRange.to}
        />
      </div>

      {modalFeature.isOn && transactionType === "income" && (
        <CreateTransactionForm
          type="income"
          open={modalFeature.isOn}
          onClose={handleCloseTransactionModal}
          selectedCurrency={currency}
          rates={exchangeRates}
          isUsingFallbackRates={isUsingFallbackRates}
        />
      )}

      {modalFeature.isOn && transactionType === "expense" && (
        <CreateTransactionForm
          type="expense"
          open={modalFeature.isOn}
          onClose={handleCloseTransactionModal}
          selectedCurrency={currency}
          rates={exchangeRates}
          isUsingFallbackRates={isUsingFallbackRates}
        />
      )}
    </>
  );
}
