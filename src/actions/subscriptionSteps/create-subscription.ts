"use server";
import { db } from "@/libs/db";
import { revalidatePath } from "next/cache";
import { currentUser } from "@/libs/currentUser";
import { SubscriptionSchema } from "@/components/subscriptions/CreateSubscriptionContainer/CreateSubscriptionWizard/schemas/subscriptionSchema";
import { SUBSCRIPTION_CURRENCY } from "@prisma/client";

interface CreateSubscriptionFormState {
  errors?: {
    name?: string;
    category?: string;
    avatarUrl?: string;
    price?: number;
    currency?: string;
    billing_period?: string;
    next_payment_date?: string;
    _form?: string[];
  };
  success?: boolean;
}

export async function createSubscription(
  formData: FormData,
  prevState: CreateSubscriptionFormState,
): Promise<CreateSubscriptionFormState> {
  const result = SubscriptionSchema.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    avatarUrl: formData.get("avatarUrl"),
    price: formData.get("price"),
    currency:
      (formData.get("currency") as SUBSCRIPTION_CURRENCY) ||
      SUBSCRIPTION_CURRENCY.USD,
    billing_period: formData.get("billing_period"),
    next_payment: formData.get("next_payment_date"),
  });

  const user = await currentUser();
  if (!user || !user.id) {
    return {
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };
  }

  if (!result.success) {
    return {
      errors: Object.fromEntries(
        Object.entries(result.error.flatten().fieldErrors).map(
          ([key, value]) => [key, value?.join(", ")],
        ),
      ),
    };
  }

  try {
    await db.subscription.create({
      data: {
        name: result.data.name,
        category: result.data.category,
        avatar_url: result.data.avatarUrl ?? "",
        price: result.data.price,
        currency:
          (result.data.currency as SUBSCRIPTION_CURRENCY) ??
          SUBSCRIPTION_CURRENCY.EUR,
        billing_period: result.data.billing_period,
        next_payment_date: result.data.next_payment,
        start_date: new Date(),
        ownerId: user.id,
      },
    });

    revalidatePath("/subscriptions");

    return { success: true };
  } catch (error) {
    console.error("Database error:", error);
    return {
      errors: {
        _form: ["An unexpected error occurred. Please try again."],
      },
    };
  }
}
