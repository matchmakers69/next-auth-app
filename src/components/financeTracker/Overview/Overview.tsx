"use client";

import { Button } from "@/components/ui/Button";
import { LocationProvider } from "@/components/providers/LocationProvider";
import { CreateIncomeForm } from "../CreateIncomeForm";
import { useState } from "react";
import { TransactionType } from "./defs";

export default function Overview() {
  const [transactionType, setTransactionType] =
    useState<TransactionType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="buttons-wrapper flex w-full items-center justify-end gap-6">
        <Button
          onClick={() => openModal("income")}
          className="bg-gradient-to-r from-blue-700 to-indigo-500 text-[rgba(var(--white),1)] hover:opacity-60"
          type="button"
          size="sm"
        >
          <span className="inline-block">New income</span>
        </Button>

        <Button
          onClick={() => openModal("expense")}
          className="bg-light-blue text-[rgba(var(--white),1)] hover:opacity-60"
          type="button"
          size="sm"
        >
          <span className="inline-block">New expense</span>
        </Button>
      </div>

      {isModalOpen && transactionType === "income" && (
        <LocationProvider>
          <CreateIncomeForm open={isModalOpen} onClose={closeModal} />
        </LocationProvider>
      )}

      {isModalOpen && transactionType === "expense" && (
        <div>Expense form goes here</div>
      )}
    </>
  );
}
