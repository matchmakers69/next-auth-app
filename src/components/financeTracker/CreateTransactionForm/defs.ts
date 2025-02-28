import { TransactionType } from "../types";

export type CreateTransactionFormProps = {
    open: boolean;
    onClose: () => void;
    type: TransactionType;
  };