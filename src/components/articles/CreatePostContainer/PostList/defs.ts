import { PostWithData } from "@/app/queries/posts"

export type PostListProps = {
    fetchData: () => Promise<PostWithData[]>
}