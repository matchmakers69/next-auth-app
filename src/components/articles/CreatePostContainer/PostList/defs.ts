import { PostWithData } from "@/lib/articlesAPI";

export type PostListProps = {
  fetchData: () => Promise<PostWithData[]>;
};
