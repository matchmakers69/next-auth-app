import { z } from "zod";

export const CurrencySchema = z.object({
  currency: z.string().min(1, "Currency is required"),
});

export type CurrencySchemaType = z.infer<typeof CurrencySchema>;
