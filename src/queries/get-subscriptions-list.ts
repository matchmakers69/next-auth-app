import { db } from "@/libs/db";
import { Subscription } from "@prisma/client";
import { cache } from "react";

export const getSubscriptionsList = cache(
  async (
    userId: string,
    orderBy: { key: string; value: string },
  ): Promise<Subscription[]> => {
    try {
      const subscriptions = await db.subscription.findMany({
        where: {
          ownerId: userId,
        },
        include: { payments: true },
        orderBy: { [`${orderBy.key}`]: orderBy.value },
      });

      return subscriptions;
    } catch (error) {
      console.error(`Some error ${error}`);
      throw new Error("Cannot fetch topics");
    }
  },
);
