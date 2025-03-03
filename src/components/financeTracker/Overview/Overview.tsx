"use client";

import { Button } from "@/components/ui/Button";
import { CreateTransactionForm } from "../CreateTransactionForm";
import { useState } from "react";
import { TransactionType } from "../types";

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
