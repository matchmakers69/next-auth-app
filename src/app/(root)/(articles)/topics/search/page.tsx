import PostList from "@/components/articles/CreatePostContainer/PostList";
import { fetchPostsBySearchTerm } from "@/queries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    return <div className="w-full">No search term provided</div>;
  }
  return (
    <div className="w-full">
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
