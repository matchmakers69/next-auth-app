import { db } from "@/libs/db";

export async function fetchSubscriptionsCategories(){
    const categories = await db.subscriptionCategory.findMany();
    return categories.map((category) => {
        return {
            id: category.id,
            label: category.label || "Uncategorized", 
        }   
    })
}