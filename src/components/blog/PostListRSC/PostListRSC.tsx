import { getBlogPosts } from "../../../queries/get-blog-post";
import { PostListRSCProps } from "./defs";
import { PostsList } from "../PostsList";

const PostListRSC = async ({ paginate }: PostListRSCProps) => {
  const posts = await getBlogPosts();
  return (
    <>
      <PostsList posts={posts} paginate={paginate} />
    </>
  );
};

export default PostListRSC;
