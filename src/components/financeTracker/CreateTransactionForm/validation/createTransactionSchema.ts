import { z } from "zod";
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from "@/constants/mocks";

export const TransactionSchema = z
  .object({
    description: z
      .string()
      .max(50, {
        message: "Too many characters for description field. Max is 50",
      })
      .nullish()
      .optional(),
    amount: z
      .string()
      .transform((val) => parseFloat(val)) // Convert string to number
      .refine((num) => !isNaN(num), { message: "Amount must be a valid number" }) // Ensure it's a number
      .refine((num) => num >= 0.01, { message: "Amount must be at least 0.01" }) // No zero or negatives
      .refine((num) => num <= 9999999999, {
        message: "Amount must be less than or equal to 10 digits",
      }),
    date: z
      .string()
      .refine((value) => !isNaN(Date.parse(value)), "Enter a valid date")
      .transform((value) => new Date(value)),
    type: z.enum(["income", "expense"]),
    category: z.string(), // Placeholder, will be refined dynamically
  })
  .superRefine((data, ctx) => {
    const validCategories =
      data.type === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

    if (!validCategories.includes(data.category)) {
      ctx.addIssue({
        code: "custom",
        path: ["category"],
        message: "Invalid category for the selected transaction type",
      });
    }
  });

export type TransactionSchemaType = z.infer<typeof TransactionSchema>;
