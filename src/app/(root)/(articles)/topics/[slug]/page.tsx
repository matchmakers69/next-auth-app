import CreatePostContainer from "@/components/articles/CreatePostContainer";
import PostList from "@/components/articles/CreatePostContainer/PostList";
import PageTitle from "@/components/ui/PageTitle";
import { fetchPostsByTopicSlug } from "@/queries/posts";

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = await params;

  return (
    <>
      <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-4">
        <div className="mb-6 sm:col-span-full md:col-span-3 md:mb-0">
          <PageTitle
            title={`${slug}`}
            slogan="Add more posts related to this topic."
          />
        </div>
        <div className="sm:col-span-full md:col-span-1">
          <CreatePostContainer slug={slug} />
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_minmax(25rem,30rem)] xl:grid-cols-[1fr_minmax(30rem,35rem)]">
        <div className="p-4">
          <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
        </div>
      </div>
    </>
  );
}
