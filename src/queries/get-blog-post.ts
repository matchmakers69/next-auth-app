import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { Post } from "../types";
import { MOCKED_POSTS } from "@/constants/mocks";

export const getBlogPosts = cache(async (isMockPostsIncluded?: boolean) => {
  const posts = await fs.readdir("./src/mdx/blogPosts");

  const refactoredPosts = posts
    .filter(
      (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx",
    )
    .map(async (file) => {
      const filePath = `./src/mdx/blogPosts/${file}`;
      const postContent = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(postContent);

      if (data.published === false) {
        return null;
      }

      return { ...data, body: content, type: "post" } as Post;
    });

  const postsWithMetadata = await Promise.all(refactoredPosts);
// Merge with Mocked Posts (if enabled)
  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(isMockPostsIncluded ? MOCKED_POSTS : []),
  ];
  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0,
    ) as Post[];

  return filtered;
});

export const getPostBySlug = async (slug: string) => {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
};
