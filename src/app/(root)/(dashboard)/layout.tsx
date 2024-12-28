import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import NavPanelLeft from "@/components/dashboard/NavPanelLeft";
import DashboardContextProvider from "@/contexts/DashboardProvider";

export default function DashboardLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative isolate flex min-h-[100svh] w-full">
        <DashboardContextProvider>
          <NavPanelLeft />
          <DashboardContainer>{children}</DashboardContainer>
        </DashboardContextProvider>
      </div>
    </Suspense>
  );
}
