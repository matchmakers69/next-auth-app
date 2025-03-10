import PostList from "@/components/articles/CreatePostContainer/PostList";
import { fetchArticlesBySearchTerm } from "@/lib/articlesAPI";

interface SearchPageProps {
  searchParams: Promise<{
    term: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = await searchParams;
  if (!term) {
    return <div className="w-full">No search term provided</div>;
  }
  return (
    <div className="w-full">
      <PostList fetchData={() => fetchArticlesBySearchTerm(term)} />
    </div>
  );
}
