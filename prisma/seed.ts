import { db } from "@/libs/db";
import { subscriptionsCategories } from "@/libs/placeholder";

async function main() {
  try {
    for (const subscriptionCategory of subscriptionsCategories) {
      const existingCategory = await db.subscriptionCategory.findFirst({
        where: { label: subscriptionCategory.label },
      });

      if (!existingCategory) {
        await db.subscriptionCategory.create({
          data: subscriptionCategory,
        });
        console.log(`Created category: ${subscriptionCategory.label}`);
      } else {
        console.log(
          `Category ${subscriptionCategory.label} already exists, skipping.`,
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
