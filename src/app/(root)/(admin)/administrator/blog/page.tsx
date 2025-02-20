import { PostListRSC } from "@/components/blog/PostListRSC";
import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Blog",
  description: "Admin blog",
};

const BlogPage = () => {
  return (
    <>
      <PageTitle className="mb-16" title="Admin's Blog" />
      <PostListRSC paginate={false} />
    </>
  );
};

export default BlogPage;
