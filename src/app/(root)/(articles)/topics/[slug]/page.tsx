import CreatePostContainer from "@/components/articles/CreatePostContainer";
import PageTitle from "@/components/ui/PageTitle";

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = await params;
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-4">
      <div className="mb-6 sm:col-span-full md:col-span-3 md:mb-0">
        <PageTitle
          title={`${slug}`}
          slogan="Create more posts about this topic"
        />
      </div>
      <div className="sm:col-span-full md:col-span-1">
        <CreatePostContainer slug={slug} />
      </div>
    </div>
  );
}
