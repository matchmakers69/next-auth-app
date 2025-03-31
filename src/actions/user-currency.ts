"use server";

import { transactionsCurrencySchema } from "@/components/dashboard/CurrencyPickerContainer/CurrencyPickerForm/validation/transactionsCurrencySchema";
import { currentUser } from "@/lib/currentUserAPI";
import { db } from "@/lib/db";
import { CURRENCY } from "@prisma/client";

export async function getUserCurrency() {
  const user = await currentUser();
  if (!user) {
    return "GBP";
  }

  try {
    const userCurrencySettings = await db.userCurrency.findUnique({
      where: { userId: user.id },
    });
    return userCurrencySettings?.currency ?? "GBP";
  } catch (error) {
    console.error(`Some error ${error}`);
    throw new Error("Cannot fetch user's currencies");
  }
}

export async function updateUserCurrency(formData: FormData) {
  const user = await currentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }

  const currency = formData.get("currency");
  const parsed = transactionsCurrencySchema.safeParse({ currency });
  if (!parsed.success) {
    throw new Error(parsed.error.message);
  }

  await db.userCurrency.upsert({
    where: { userId: user.id },
    update: { currency: currency as CURRENCY },
    create: { userId: user.id, currency: currency as CURRENCY },
  });
}
