import { z } from "zod";
import { startOfToday } from "date-fns";
import { SUBSCRIPTION_BILLING_PERIOD } from "@prisma/client";

const validateBillingOptions = Object.values(SUBSCRIPTION_BILLING_PERIOD) as string[];

export const ExpenseInfoSchema = z.object({
  price: z
  .number()
  .min(1, "Please enter a valid cost")
  .max(9999999999, "Number must be less than or equal to 10 digits")
  .positive("Please enter a positive number")
  .transform((val) => {
    if (typeof val === "string") {
      return parseFloat(val);
    }
    return val;
  })
  .refine(
    (value) => /^(-?)(?!0\d*$)\d*\.?\d+$/.test(String(value)),
    "Cost of subscription is not valid",
  ),
  currency: z.string().min(1, "Currency is required"),
  billing_period: z.enum(validateBillingOptions as [string, ...string[]], {
      // Explicit cast to tuple
      errorMap: () => {
        return { message: "Billing period must be selected" };
      },
    }),
    // billing_period: z
    //   .string()
    //   .refine(
    //     (value): value is keyof typeof SUBSCRIPTION_BILLING_PERIOD =>
    //       Object.values(SUBSCRIPTION_BILLING_PERIOD).includes(
    //         value as SUBSCRIPTION_BILLING_PERIOD,
    //       ),
    //     {
    //       message: "Select a valid billing period",
    //     },
    //   ),

    start_date: z.coerce.date().refine((date) => date >= startOfToday()),
    next_payment: z
      .string() // Dates are usually parsed as strings
      .refine((value) => !isNaN(Date.parse(value)), "Enter a valid date")
      .transform((value) => new Date(value)), // Converts to a `Date` object
});

export type ExpenseInfoSchemaType = z.infer<typeof ExpenseInfoSchema>;
