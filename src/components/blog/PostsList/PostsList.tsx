"use client";

import { useState } from "react";
import { PostsListProps } from "./defs";
import { BlockEntry } from "../BlockEntry";
import paths from "@/utils/paths";

const PostsList = ({ posts, paginate }: PostsListProps) => {
  const [showMore, setShowMore] = useState(4);
  return (
    <div className="relative mt-[4.56rem] grid grid-cols-1 grid-rows-1 gap-[3.06rem] gap-y-[2.5rem] rounded-[7px] md:grid-cols-2 md:gap-[3.06rem]">
      {posts.slice(0, paginate ? showMore : undefined).map((post) => (
        <BlockEntry
          key={post.slug}
          href={
            post.isThirdParty
              ? post.href!
              : paths.adminBlogPostShow(post.slug || "")
          }
          title={post.title}
          date={post.date ? new Date(post.date) : undefined}
          views={post.views}
          isThirdParty={post.isThirdParty}
        />
      ))}

      {paginate && showMore < posts.length && (
        <button
          onClick={() => setShowMore(showMore + 4)}
          className="mt-4 w-full cursor-pointer rounded-md border-none bg-gray-200 px-4 py-2 font-medium text-gray-600 transition-all hover:bg-gray-300 hover:text-gray-900 focus:outline-none active:bg-gray-100"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default PostsList;
