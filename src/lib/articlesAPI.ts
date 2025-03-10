import { db } from "@/lib/db";

// export type Article = Post & {
//   topic: {
//     slug: string;
//   };
//   user: { name: string | null };
//   _count: { comments: number };
// };

// Alternative way to define the type
export type Article = Awaited<
  ReturnType<typeof fetchArticlesByTopicSlug>
>[number];

export function fetchArticlesByTopicSlug(slug: string) {
  return db.article.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}

export function fetchTopArticles(): Promise<Article[]> {
  return db.article.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
}

// Search posts
export function fetchArticlesBySearchTerm(term: string): Promise<Article[]> {
  return db.article.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    where: {
      OR: [{ title: { contains: term } }, { content: { contains: term } }],
    },
  });
}
