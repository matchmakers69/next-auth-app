import { db } from "@/libs/db";
import { subscriptionsCategories } from "@/libs/placeholder-data";

async function main() {
    try {
      for (const subscriptionCategory of subscriptionsCategories) {
        await db.subscriptionCategory.create({
          data: subscriptionCategory,
        });
      }
      console.log('Seed completed successfully');
    } catch (error) {
      console.error('Error during seeding:', error);
      throw error; // Re-throw the error to be caught in the outer catch block
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
