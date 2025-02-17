import { db } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    const categories = await db.subscriptionCategory.findMany();
    const mappedCategories = categories.map((category) => ({
      id: category.id,
      label: category.label || "Uncategorized", // Default label if none exists
    }));

    return NextResponse.json(mappedCategories, { status: 200 });
  } catch (error) {
    console.error("Error fetching subscription categories:", error);
    return NextResponse.json(
      { message: "Could not fetch subscription categories" },
      { status: 500 },
    );
  }
}
