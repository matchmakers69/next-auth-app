import { PostBody } from "@/mdx/post-body";
import {
  getBlogPosts,
  getPostBySlug,
} from "../../../../../../libs/get-blog-postAPI";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();
  return <PostBody>{post?.body}</PostBody>;
}
