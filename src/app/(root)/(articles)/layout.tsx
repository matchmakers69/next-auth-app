import ArticlesHeader from "@/components/articles/ArticlesHeader";
import { ReactNode } from "react";

export default function ArticlesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-full w-full pt-28">
      <ArticlesHeader />
      <div className="container mx-auto flex h-screen flex-col">
        <div className="flex-grow">{children}</div>
      </div>
    </main>
  );
}
