import { BaseProps } from "@/components/ui/types/defs";
import { getBlogPosts } from "@/queries/get-blog-post";

async function getPostsData({ slug }: { slug: string }) {
  const posts = await getBlogPosts();
  const postIndex = posts.findIndex((p) => p?.slug === slug);

  if (postIndex === -1) {
    throw new Error(
      `${slug} not found in posts. Did you forget to rename the file?`,
    );
  }

  const post = posts[postIndex];

  const { ...rest } = post;

  return {
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
    ...rest,
  };
}

interface PostLayoutProps extends BaseProps {
  params: Promise<{
    slug: string;
  }>;
}

const PostLayout = async ({ children, params }: PostLayoutProps) => {
  const { title, date, lastModified } = await getPostsData(await params);
  const lastModifiedDate = lastModified
    ? new Date(lastModified).toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;
  return (
    <>
      <span className="date">{date}</span>
      {lastModified ? (
        <span className="text-sm text-gray-500">
          Last modified {lastModifiedDate}
        </span>
      ) : null}
      <article>
        <h1 className="title">{title}</h1>
      </article>
      {children}
    </>
  );
};

export default PostLayout;
