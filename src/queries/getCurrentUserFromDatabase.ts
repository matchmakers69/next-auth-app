import { auth } from "@/auth";
import { db } from "@/libs/db";

export const getCurrentUserFromDatabase = async () => {
  try {
    const session = await auth();
    if (!session) {
      return null;
    }
    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toDateString(),
    };
  } catch (error) {
    console.error(`Some error ${error}`);
    throw new Error("Cannot fetch user");
  }
};
