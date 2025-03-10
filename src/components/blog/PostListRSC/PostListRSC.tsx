import { getBlogPosts } from "../../../lib/get-blog-postAPI";
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
