import paths from "@/utils/paths";
import { PostListProps } from "./defs";
import Link from "next/link";

const PostList = async ({ fetchData }: PostListProps) => {
  const posts = await fetchData();
  if (!posts) return null;

  return (
    <ul className="flex w-full flex-col gap-6">
      {posts.map((post) => (
        <li
          className="flex items-center overflow-hidden rounded-[18px] border border-[#202020] px-[1rem] py-0 backdrop-blur-custom odd:bg-[hsla(0,0%,100%,0.01)] even:border-[hsla(0,0%,100%,0.05)] even:bg-[hsla(0,0%,100%,0.03)]"
          key={post.id}
        >
          <Link
            className="flex h-full w-full flex-col justify-between p-section text-text-grey transition-colors duration-200 hover:text-light-blue"
            href={paths.postShow(post.topic.slug, post.id)}
          >
            <h3 className="mb-6 mt-[-0.25em] inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap text-[2.6rem] font-semibold text-text-light">
              {post.title}
            </h3>
            <div className="flex flex-row gap-8">
              <p className="text-xs">By {post.user.name}</p>
              <p className="text-xs">{post._count.comments} comments</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
