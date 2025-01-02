import TopicsContainer from "@/components/articles/TopicsContainer";
import PageTitle from "@/components/ui/PageTitle";

function TopicsPage() {
  return (
    <>
      <>
        <PageTitle title="Topics" slogan="Preview all topics here!" />
        <div className="mt-14">
          <TopicsContainer />
        </div>
      </>
    </>
  );
}

export default TopicsPage;
