import { SUBSCRIPTION_BILLING_PERIOD } from "@prisma/client";
import { z } from "zod";

export const GeneralInformationSchema = z.object({
  subscriptionsGeneralInformation: z.object({
    name: z.string().min(1, "Subscription title is required field"),
    category: z.string({
      errorMap: () => {
        return { message: "You have to select job type" };
      },
    }),
    avatarUrl: z
      .string()
      .max(500, {
        message: "Too many characters for avatar url field. Max is 500",
      })
      .url("Enter a correct URL!")
      .nullish() // Allow null or undefined
      .refine(
        (val) =>
          !val ||
          /((https?):\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(
            val,
          ),
        {
          message: "Enter correct url!",
        },
      )
      .optional(),
  }),
});

export const ExpenseInformationSchema = z.object({
  expenseInformation: z.object({
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
        "Cost is not valid",
      ),
  }),
  currency: z.string().min(1, "Currency is required"),
  billing_period: z
    .string()
    .refine(
      (value): value is keyof typeof SUBSCRIPTION_BILLING_PERIOD =>
        Object.values(SUBSCRIPTION_BILLING_PERIOD).includes(
          value as SUBSCRIPTION_BILLING_PERIOD,
        ),
      {
        message: "Select a valid billing period",
      },
    ),
  next_payment: z
    .string() // Dates are usually parsed as strings
    .refine((value) => !isNaN(Date.parse(value)), "Enter a valid date")
    .transform((value) => new Date(value)), // Converts to a `Date` object
});

export type GeneralInformationSchemaType = z.infer<
  typeof GeneralInformationSchema
>;
export type ExpenseInformationSchemaType = z.infer<
  typeof ExpenseInformationSchema
>;
