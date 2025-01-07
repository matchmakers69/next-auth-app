import { notFound } from "next/navigation";
import { ShowPostProps } from "./defs";
import { getPostByPostId } from "@/app/queries/get-topics-by-id";

export default async function ShowPost({ postId }: ShowPostProps) {
  const post = await getPostByPostId(postId);
  if (!post) {
    notFound();
  }

  return (
    <div className="m-4">
      <h1 className="my-2 text-2xl font-bold">{post.title}</h1>
      <p className="rounded border p-4">{post.content}</p>
    </div>
  );
}
