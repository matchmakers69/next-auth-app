import CreateTopicContainer from "@/components/articles/CreateTopicContainer";
import PageTitle from "@/components/ui/PageTitle";

function TopicsPage() {
  return (
    <>
      <>
        <PageTitle title="Topics" slogan="List of popular topics" />
        <div className="mt-14">
          <div className="mb-12">
            <CreateTopicContainer />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_minmax(25rem,30rem)] xl:grid-cols-[1fr_minmax(30rem,35rem)]">
            <div className="order-2 bg-gray-100 p-4 md:order-none">
              <h1 className="text-xl font-bold">Main Content</h1>
              <p></p>
            </div>

            <aside className="order-1 bg-gray-200 p-4 md:order-none">
              <h2 className="text-lg font-semibold">Sidebar</h2>
              <p>
                This is the sidebar. It has a fixed width of 250px on larger
                screens and adjusts properly on smaller screens.
              </p>
            </aside>
          </div>
        </div>
      </>
    </>
  );
}

export default TopicsPage;
