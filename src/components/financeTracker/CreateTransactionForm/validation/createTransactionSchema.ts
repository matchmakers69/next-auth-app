import { z } from "zod";
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from "@/constants/mocks";

export const TransactionSchema = z
  .object({
    description: z
      .string()
      .min(3, "Minimum 3 characters are required for description")
      .max(50, {
        message: "Too many characters for description field. Max is 50",
      }),
    amount: z
      .union([z.string(), z.number()]) // Allow both string and number
      .transform((val) => (typeof val === "string" ? parseFloat(val) : val)) // Convert string to number if needed
      .refine((num) => !isNaN(num), {
        message: "Amount must be a valid number",
      }) // Ensure it's a number
      .refine((num) => num >= 1, { message: "Amount must be at least 1" }) // No zero or negatives
      .refine((num) => num <= 9999999999, {
        message: "Amount must be less than or equal to 10 digits",
      }),
    currency: z.string().min(1, "Currency is required"),
    date: z
      .string({ required_error: "Transaction date is a required field" })
      .refine((value) => !isNaN(Date.parse(value)), {
        message: "Enter a valid date",
      }) // Invalid format error
      .transform((value) => new Date(value)),
    type: z.enum(["income", "expense"]),
    category: z.string().min(1, "Category is required"), // Ensure category is not empty
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
