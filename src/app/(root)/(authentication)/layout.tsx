import { ReactNode, Suspense } from "react";
import Loading from "./loading";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-full w-full">
      <Suspense fallback={<Loading />}>
        <div className="fullscreen flex flex-row flex-nowrap items-center justify-center gap-[50px] p-[20px]">
          {children}
        </div>
      </Suspense>
    </main>
  );
}
