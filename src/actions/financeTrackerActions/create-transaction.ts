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
  const parsedBody = TransactionSchema.safeParse(formValues);
  if (!parsedBody.success) {
    throw new Error(parsedBody.error.message);
  }

  const user = await currentUser();
  if (!user || !user.id) {
    redirect(paths.login());
  }

  const { description, amount, category, date, type } = parsedBody.data;
  const categoryRow = await db.financeCategory.findFirst({
    where: {
      userId: user.id,
      name: category,
    },
  });

  if (!categoryRow) {
    throw new Error("category not found");
  }
  await db.$transaction([
    db.financeTransaction.create({
      data: {
        userId: user.id,
        amount,
        date,
        description: description || "",
        type,
        category: categoryRow.name,
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
