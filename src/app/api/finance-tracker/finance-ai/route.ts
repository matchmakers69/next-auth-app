import OpenAI from "openai";
import { currentUser } from "@/lib/currentUserAPI";
import { db } from "@/lib/db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const user = await currentUser();
  if (!user || !user.id) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const { query } = body;

    if (!query) {
      return new Response(JSON.stringify({ error: "Missing query" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transactions = await db.financeTransaction.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        date: "desc",
      },
    });
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);

    // Calculate category-wise spending
    const categorySpending = transactions
      .filter((t) => t.type === "expense")
      .reduce(
        (acc, t) => {
          acc[t.category] = (acc[t.category] || 0) + t.amount;
          return acc;
        },
        {} as Record<string, number>,
      );

    // Find highest spending category
    const highestCategory = Object.entries(categorySpending).reduce(
      (max, [category, amount]) =>
        amount > max.amount ? { category, amount } : max,
      { category: "", amount: 0 },
    );

    // Generate AI prompt with spending insights
    const aiPrompt = `
      You are a financial assistant helping users manage their budget. Here is their data:
      
      - Total Income: ${totalIncome}
      - Total Expenses: ${totalExpense}
      - Expense Breakdown:
        ${Object.entries(categorySpending)
          .map(([category, amount]) => `- ${category}: ${amount}`)
          .join("\n")}
      - Highest spending category: ${highestCategory.category} (${highestCategory.amount})

      Based on this data, provide:
      1. A summary of their financial situation.
      2. Savings strategies (e.g., how to cut unnecessary spending).
      3. Any warnings if their expenses exceed their income.
      
      Now, answer their question: "${query}"
    `;

    // Call OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "system", content: aiPrompt }],
    });

    return new Response(
      JSON.stringify({ answer: response.choices[0].message.content }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
