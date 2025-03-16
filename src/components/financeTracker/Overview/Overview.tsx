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

export default function Overview({ userId }: OverviewProps) {
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

  return (
    <>
      <CurrencyConverter />
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
        <StatsCards from={dateRange.from} to={dateRange.to} />
      </div>

      <div className="categories-container flex w-full flex-col gap-2">
        <CategoriesStats from={dateRange.from} to={dateRange.to} />
      </div>

      {isModalOpen && transactionType === "income" && (
        <CreateTransactionForm
          type="income"
          open={isModalOpen}
          onClose={closeModal}
        />
      )}

      {isModalOpen && transactionType === "expense" && (
        <CreateTransactionForm
          type="expense"
          open={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}
