import { ReactNode, Suspense } from "react";
import Loading from "../(application)/loading";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import DashboardContextProvider from "@/contexts/DashboardProvider";
import { AdminMenuSidebar } from "@/components/admin/AdminMenuSidebar";

export default function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative isolate flex min-h-[100svh] w-full">
        <DashboardContextProvider>
          <AdminMenuSidebar />
          <DashboardContainer>{children}</DashboardContainer>
        </DashboardContextProvider>
      </div>
    </Suspense>
  );
}
