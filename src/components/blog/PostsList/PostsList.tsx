"use client";

import { useState } from "react";
import { PostsListProps } from "./defs";
import { BlockEntry } from "../BlockEntry";
import paths from "@/utils/paths";
import { formatDateToEnglish } from "@/utils/dates";
import { Button } from "@/components/ui/Button/Button";

const PostsList = ({ posts, paginate }: PostsListProps) => {
  const [showMore, setShowMore] = useState(6);
  return (
    <>
      <div className="relative mt-[4.56rem] grid grid-cols-1 grid-rows-1 gap-[3.06rem] gap-y-[2.5rem] rounded-[7px] md:grid-cols-2 md:gap-[3.06rem]">
        {posts.slice(0, paginate ? showMore : undefined).map((post) => {
          const date = formatDateToEnglish(new Date(post.date));
          return (
            <BlockEntry
              key={`post-item-${post.slug}`}
              href={
                post.isThirdParty
                  ? post.href!
                  : paths.adminBlogPostShow(post.slug || "")
              }
              title={post.title}
              date={date}
              views={post.views}
              isThirdParty={post.isThirdParty}
            />
          );
        })}
      </div>
      {paginate && showMore < posts.length && (
        <footer className="mt-12 flex w-full flex-col items-center justify-center">
          <Button
            className="min-w-[24rem] rounded-lg border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent text-[rgba(var(--white),1)] hover:opacity-60"
            onClick={() => setShowMore(showMore + 6)}
            variant="outline"
            type="button"
            size="lg"
          >
            Show more
          </Button>
        </footer>
      )}
    </>
  );
};

export default PostsList;
