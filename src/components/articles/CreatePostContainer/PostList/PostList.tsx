import paths from "@/utils/paths";
import { PostListProps } from "./defs";
import Link from "next/link";

const PostList = async ({ fetchData }: PostListProps) => {
  const posts = await fetchData();
  if (!posts) return;
  return (
    <>
      {posts.map((post) => (
        <div className="rounded border p-2" key={post.id}>
          <Link href={paths.postShow(post.topic.slug, post.id)}>
            <h3 className="text-lg font-bold">{post.title}</h3>
            <div className="flex flex-row gap-8">
              <p className="text-xs text-gray-400">By {post.user.name}</p>
              <p className="text-xs text-gray-400">
                {post._count.comments} comments
              </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PostList;
