import { z } from "zod";

export const transactionsCurrencySchema = z.object({
  currency: z.string().min(1, "Currency is required").optional(),
});

export type TransactionCurrencyValues = z.infer<typeof transactionsCurrencySchema>;
