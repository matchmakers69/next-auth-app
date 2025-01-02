"use client";

import { IBM_Plex_Sans } from "next/font/google";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { DashboardContainerProps } from "./defs";
import { useDashboardContext } from "@/contexts/DashboardProvider/DashboardProvider";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

const DashboardContainer = ({ children }: DashboardContainerProps) => {
  const user = useCurrentUser();
  const { dispatch, isSideBarInView } = useDashboardContext();

  const username = user?.name ?? "Username";

  const handleOpenSidebar = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR",
      payload: !isSideBarInView,
    });
  };

  return (
    <>
      <main className="flex flex-1 flex-col lg:min-w-0 lg:pl-[32rem]">
        <header className="dashboard-header bg-sidebar-grey mb-6 border-b border-dark-border">
          <div className="header-dashboard-inner flex w-full items-center justify-between px-6 py-4 lg:items-start lg:justify-start lg:px-8 lg:py-6">
            <h2
              className={`${IbmPlex.className} text-[1.8rem] font-medium leading-[1.2] text-text-light sm:text-lg md:text-[2.4rem]`}
            >
              Welcome back, {username}
            </h2>
            <button
              className="sidebar-menu-toggle-button inline-flex h-full cursor-pointer items-center p-[1.5rem] focus:outline-none focus:ring-1 focus-visible:ring-offset-1 md:p-[20px] lg:hidden"
              onClick={handleOpenSidebar}
              type="button"
              aria-label="toggle navigation sidebar"
            >
              <span className="sidebar-menu-toggle-button-icon inline-flex h-[1.5rem] w-[1.5rem] flex-col items-start sm:mr-[0.8rem]" />
              <span className="hidden text-sm font-thin uppercase sm:inline-block">
                Menu
              </span>
            </button>
          </div>
        </header>
        <div className="dashboard-content grow">
          <div className="dashboard-content-inner px-14 py-8 lg:px-16 lg:py-10">
            <div className="mx-auto">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardContainer;
