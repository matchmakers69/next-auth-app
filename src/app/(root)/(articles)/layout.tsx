import ArticlesHeader from "@/components/articles/ArticlesHeader";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";

export default function ArticlesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-full w-full pt-28">
      <ArticlesHeader />
      <div className="container mx-auto flex h-screen flex-col">
        <Suspense fallback={<Loading />}>
          <section className="pt-[4.8rem]">{children}</section>
        </Suspense>
      </div>
    </main>
  );
}
