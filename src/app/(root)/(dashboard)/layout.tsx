import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import NavPanelLeft from "@/components/dashboard/NavPanelLeft";

export default function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative isolate flex min-h-[100svh] w-full">
        <NavPanelLeft />
        <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-[32rem] lg:pr-2 lg:pt-2">
          <div className="grow p-6 lg:p-10">
            <div className="mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}
