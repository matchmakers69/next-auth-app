import { db } from "./db";
import { ExtendedUser } from "@/auth";

export async function getUserSettings(user: ExtendedUser) {
  try {
    const userCurrency = await db.userCurrency.findUnique({
      where: { userId: user.id },
    });

    return userCurrency;
  } catch (error) {
    console.error("Error fetching user settings:", error);
    //  redirect("/error"); TODO Add generic error page
  }
}
