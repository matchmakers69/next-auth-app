import NavbarMain from "@/components/ui/NavbarMain";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-full w-full pt-28">
      <NavbarMain />
      <div className="container mx-auto flex h-screen flex-col">
        <Suspense fallback={<Loading />}>
          <div className="flex-grow">{children}</div>
        </Suspense>
      </div>
    </main>
  );
}
