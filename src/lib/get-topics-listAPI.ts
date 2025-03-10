import { db } from "@/lib/db";

export const getTopicsList = async () => {
  try {
    const res = await db.topic.findMany({
      select: {
        id: true,
        slug: true,
      },
    });

    return res;
  } catch (error) {
    console.error(`Some error ${error}`);
    throw new Error("Cannot fetch topics");
  }
};
