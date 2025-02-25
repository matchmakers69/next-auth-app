import { Post } from "../../../types";

export type PostsListProps = {
  posts: Post[];
  paginate?: boolean;
};
