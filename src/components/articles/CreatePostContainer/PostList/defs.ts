import { PostWithData } from "@/queries/posts"

export type PostListProps = {
    fetchData: () => Promise<PostWithData[]>
}