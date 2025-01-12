import ArticlesHeader from "@/components/articles/ArticlesHeader";
import { ReactNode } from "react";
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
            <section className="pt-[4.8rem]">{children}</section>
          </div>
        </main>
        <FooterMain />
      </div>
    </>
  );
}
