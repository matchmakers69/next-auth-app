import { fetchTopPosts } from "@/app/queries/posts";
import PostList from "@/components/articles/CreatePostContainer/PostList";
import CreateTopicContainer from "@/components/articles/CreateTopicContainer";
import TopicsList from "@/components/articles/TopicsList";
import PageTitle from "@/components/ui/PageTitle";

function TopicsPage() {
  return (
    <>
      <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-4">
        <div className="mb-6 sm:col-span-full md:col-span-3 md:mb-0">
          <PageTitle
            title="Topics"
            slogan="Irregularly scheduled publications of thoughts, idead and tutorials."
          />
        </div>
        <div className="sm:col-span-full md:col-span-1">
          <CreateTopicContainer />
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_minmax(25rem,30rem)] xl:grid-cols-[1fr_minmax(30rem,35rem)]">
        <div className="order-2 p-4 md:order-none">
          <h2 className="mb-8 text-[2.0rem] font-semibold md:text-[2.4rem]">
            Top posts
          </h2>
          <PostList fetchData={fetchTopPosts} />
        </div>

        <aside className="order-1 p-4 md:order-none">
          <h2 className="mb-8 text-[2.0rem] font-semibold md:text-[2.4rem]">
            Recently added topics
          </h2>
          <TopicsList />
        </aside>
      </div>
    </>
  );
}

export default TopicsPage;
