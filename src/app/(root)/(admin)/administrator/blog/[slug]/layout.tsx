import { BaseProps } from "@/components/ui/types/defs";
import { getPostsData } from "@/queries/get-blog-post";
import { Button } from "@/components/ui/Button";
import paths from "@/utils/paths";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { formatDateToEnglish } from "@/utils/dates";

interface PostLayoutProps extends BaseProps {
  params: Promise<{
    slug: string;
  }>;
}

const PostLayout = async ({ children, params }: PostLayoutProps) => {
  const { slug } = await params;
  const { title, date, lastModified } = await getPostsData(slug);

  return (
    <>
      <div className="back-button-wrapper mb-12 flex w-full justify-end">
        <Button
          className="max-w-[20rem] rounded-lg border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent text-[rgba(var(--white),1)] hover:opacity-60"
          asChild
          variant="link"
          size="sm"
        >
          <Link className="flex items-center" href={paths.adminBlog()}>
            <ArrowLeft />
            <span className="ml-3 inline-block">Back to blog page</span>
          </Link>
        </Button>
      </div>
      <span className="date">{date}</span>
      {lastModified ? (
        <span className="text-sm text-gray-500">
          Last modified {formatDateToEnglish(new Date(lastModified))}
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
