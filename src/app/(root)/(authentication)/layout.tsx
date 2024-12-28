import { ReactNode, Suspense } from "react";
import Loading from "./loading";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-full w-full">
      <Suspense fallback={<Loading />}>
        <div className="flex h-full w-full flex-row items-center justify-center p-8 lg:justify-between lg:p-0">
          {children}
        </div>
      </Suspense>
    </main>
  );
}
