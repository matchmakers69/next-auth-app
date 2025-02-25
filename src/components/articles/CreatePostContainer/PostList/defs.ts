import { PostWithData } from "@/libs/articlesAPI";

export type PostListProps = {
  fetchData: () => Promise<PostWithData[]>;
};
