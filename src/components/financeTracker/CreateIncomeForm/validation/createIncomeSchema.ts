import { INCOME_CATEGORY_LABEL } from "@prisma/client";
import { z } from "zod";

const validateIncomeCategories = Object.values(
  INCOME_CATEGORY_LABEL,
) as string[];

export const IncomeSchema = z.object({
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
  category: z.enum(validateIncomeCategories as [string, ...string[]], {
    // Explicit cast to tuple
    errorMap: () => {
      return { message: "You have to select a category" };
    },
  }),
  date: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), "Enter a valid date")
    .transform((value) => new Date(value)),
});

export type IncomeSchemaType = z.infer<typeof IncomeSchema>;
