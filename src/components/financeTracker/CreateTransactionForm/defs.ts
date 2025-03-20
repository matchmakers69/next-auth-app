import { CURRENCY } from "@prisma/client";
import { TransactionType } from "../types";

export type CreateTransactionFormProps = {
    open: boolean;
    onClose: () => void;
    type: TransactionType;
    userCurrency: CURRENCY;
    rates: Record<string, number>;
    isUsingFallbackRates?: boolean;
  };