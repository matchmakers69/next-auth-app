import { db } from "@/lib/db";
import { subscriptionsCategories, incomeCategories, expenseCategories } from "@/lib/placeholder";

async function main() {
  try {
    // Seeding subscription categories
    for (const subscriptionCategory of subscriptionsCategories) {
      const existingCategory = await db.subscriptionCategory.findFirst({
        where: { label: subscriptionCategory.label },
      });

      if (!existingCategory) {
        await db.subscriptionCategory.create({
          data: subscriptionCategory,
        });
        console.log(`Created subscription category: ${subscriptionCategory.label}`);
      } else {
        console.log(
          `Subscription category ${subscriptionCategory.label} already exists, skipping.`,
        );
      }
    }

    // Seeding income categories
    for (const incomeCategory of incomeCategories) {
      const existingIncomeCategory = await db.incomeCategory.findFirst({
        where: { label: incomeCategory.label },
      });

      if (!existingIncomeCategory) {
        await db.incomeCategory.create({
          data: incomeCategory,
        });
        console.log(`Created income category: ${incomeCategory.label}`);
      } else {
        console.log(
          `Income category ${incomeCategory.label} already exists, skipping.`,
        );
      }
    }

    // Seeding expense categories
    for (const expenseCategory of expenseCategories) {
      const existingExpenseCategory = await db.expenseCategory.findFirst({
        where: { label: expenseCategory.label },
      });

      if (!existingExpenseCategory) {
        await db.expenseCategory.create({
          data: expenseCategory,
        });
        console.log(`Created expense category: ${expenseCategory.label}`);
      } else {
        console.log(
          `Expense category ${expenseCategory.label} already exists, skipping.`,
        );
      }
    }

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
