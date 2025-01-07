import CreateCommentForm from "@/components/articles/CreateCommentForm";
import ShowPost from "@/components/articles/ShowPost";
import paths from "@/utils/paths";
import Link from "next/link";
interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;
  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <ShowPost postId={postId} />
      <CreateCommentForm postId={postId} startOpen />
    </div>
  );
}

export default PostShowPage;
