import { notFound } from "next/navigation";
import { getPostByPostId } from "@/queries/get-topics-by-id";
import ShowPost from "@/components/articles/ShowPost";
import { Button } from "@/components/ui/Button";
import paths from "@/utils/paths";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PostShowLoading from "@/components/articles/PostShowLoading";
import { Suspense } from "react";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = await params;

  const post = await getPostByPostId(postId);
  if (!post) {
    notFound();
  }
  return (
    <>
      <div className="back-button-container mb-12">
        <Button
          className="max-w-[20rem] rounded-lg border border-solid border-[hsla(0,0%,100%,0.1)] bg-transparent text-[rgba(var(--white),1)] hover:opacity-60"
          asChild
          variant="link"
          size="sm"
        >
          <Link className="flex items-center" href={paths.topicShow(slug)}>
            <ArrowLeft />
            <span className="ml-3 inline-block">Back to topic page</span>
          </Link>
        </Button>
      </div>
      <Suspense fallback={<PostShowLoading />}>
        <ShowPost post={post} />
      </Suspense>
    </>
  );
}
