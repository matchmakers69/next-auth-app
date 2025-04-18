import { db } from "@/lib/db";

export async function getPostByPostId(postId: string) {
  try {
    const singlePost = await db.article.findFirst({
      where: { id: postId },
    });

    if (!singlePost) {
      throw new Error();
    }
    return singlePost;
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
    throw new Error("Cannot fetch post by post id");
  }
}
