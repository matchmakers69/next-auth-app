import { z } from "zod";
import { startOfToday } from "date-fns";
import { SUBSCRIPTION_BILLING_PERIOD } from "@prisma/client";

const validateBillingOptions = Object.values(
  SUBSCRIPTION_BILLING_PERIOD,
) as string[];

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
  start_date: z.string().superRefine((value, ctx) => {
    const date = new Date(value);

    if (!value || isNaN(date.getTime())) {
      ctx.addIssue({
        code: "custom",
        message: "Field is required and must be a valid date.",
      });
      return;
    }
  }),
  next_payment: z.union([z.string(), z.null()]).superRefine((value, ctx) => {
    if (!value) {
      ctx.addIssue({
        code: "custom",
        message: "Field is required and must be a valid date.",
      });
      return;
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      ctx.addIssue({
        code: "custom",
        message: "Must be a valid date.",
      });
      return;
    }

    if (date < startOfToday()) {
      ctx.addIssue({
        code: "custom",
        message: "Must be today or in the future.",
      });
    }
  }),
});

export type ExpenseInfoSchemaType = z.infer<typeof ExpenseInfoSchema>;
