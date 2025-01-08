import ArticlesHeader from "@/components/articles/ArticlesHeader";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import FooterMain from "@/components/ui/FooterMain";

export default function ArticlesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <ArticlesHeader />
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow pt-[70px]">
          <div className="container mx-auto flex flex-col">
            <Suspense fallback={<Loading />}>
              <section className="pt-[4.8rem]">{children}</section>
            </Suspense>
          </div>
        </main>
        <FooterMain />
      </div>
    </>
  );
}
