import { PostWithData } from "@/queries/articles";

export type PostListProps = {
  fetchData: () => Promise<PostWithData[]>;
};
