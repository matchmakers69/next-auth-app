import { db } from "./db";

export async function getBalanceStats(userId: string, from: Date, to: Date) {
  const totals = await db.financeTransaction.groupBy({
    by: ["type"],
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
  });
  return {
    expense: totals.find((total) => total.type === "expense")?._sum.amount || 0,
    income: totals.find((total) => total.type === "income")?._sum.amount || 0,
  };
}
