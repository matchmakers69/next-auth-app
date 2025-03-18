import { db } from "./db";

export async function getCategoriesStats(userId: string, from: Date, to: Date) {
  const stats = await db.financeTransaction.groupBy({
    by: ["type", "category"],
    where: {
      userId,
      date: {
        gte: from,
        lte: to,
      },
    },
    _sum: {
      amount: true,
    },
    orderBy: {
      _sum: {
        amount: "desc",
      },
    },
  });

  return stats;
}
