"use server";
import { db } from "@/libs/db";
import paths from "@/utils/paths";
import { redirect } from "next/navigation";
import { currentUser } from "@/libs/currentUserAPI";
import {
  TransactionSchemaType,
  TransactionSchema,
} from "@/components/financeTracker/CreateTransactionForm/validation/createTransactionSchema";

export async function CreateTransaction(formValues: TransactionSchemaType) {
  const formattedValues = {
    ...formValues,
    amount: `${formValues.amount}`,
    date:
      formValues.date instanceof Date
        ? formValues.date.toISOString()
        : formValues.date, // Convert Date to ISO string
  };
  const parsedBody = TransactionSchema.safeParse(formattedValues);
  if (!parsedBody.success) {
    throw new Error(parsedBody.error.message);
  }

  const user = await currentUser();
  if (!user || !user.id) {
    redirect(paths.login());
  }

  const { description, amount, category, date, type } = parsedBody.data;
  await db.$transaction([
    db.financeTransaction.create({
      data: {
        userId: user.id,
        amount,
        date,
        description: description || "",
        type,
        category,
        categoryIcon: "", //TODO possibly remove from schema
      },
    }),

    db.monthHistory.upsert({
      where: {
        day_month_year_userId: {
          userId: user.id,
          day: date.getUTCDate(),
          month: date.getUTCMonth(),
          year: date.getUTCFullYear(),
        },
      },
      create: {
        userId: user.id,
        day: date.getUTCDate(),
        month: date.getUTCMonth(),
        year: date.getUTCFullYear(),
        expense: type === "expense" ? amount : 0,
        income: type === "income" ? amount : 0,
      },
      update: {
        expense: {
          increment: type === "expense" ? amount : 0,
        },
        income: {
          increment: type === "income" ? amount : 0,
        },
      },
    }),
    // Update year aggreate
    db.yearHistory.upsert({
      where: {
        month_year_userId: {
          userId: user.id,
          month: date.getUTCMonth(),
          year: date.getUTCFullYear(),
        },
      },
      create: {
        userId: user.id,
        month: date.getUTCMonth(),
        year: date.getUTCFullYear(),
        expense: type === "expense" ? amount : 0,
        income: type === "income" ? amount : 0,
      },
      update: {
        expense: {
          increment: type === "expense" ? amount : 0,
        },
        income: {
          increment: type === "income" ? amount : 0,
        },
      },
    }),
  ]);
}
