"use client";
import { IBM_Plex_Sans } from "next/font/google";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import { DashboardHeaderProps } from "./defs";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

const DashboardHeader = ({ onOpenSidebar }: DashboardHeaderProps) => {
  const user = useCurrentUser();
  const username = user?.name ?? "Username";
  return (
    <header className="dashboard-header mb-6 border-b border-dark-border bg-sidebar-grey">
      <div className="header-dashboard-inner flex w-full items-center justify-between px-8 py-4 lg:items-start lg:justify-start lg:py-6">
        <h2
          className={`${IbmPlex.className} text-[1.2rem] font-medium leading-[1.2] text-text-light sm:text-[1.4rem]`}
        >
          Welcome back, {username}
        </h2>
        <button
          className="sidebar-menu-toggle-button flex h-full cursor-pointer items-center p-[1rem] focus:outline-none focus:ring-1 focus-visible:ring-offset-1 md:p-[20px] lg:hidden"
          onClick={onOpenSidebar}
          type="button"
          aria-label="toggle navigation sidebar"
        >
          <span className="sidebar-menu-toggle-button-icon flex h-[2rem] w-[2rem] flex-col items-start justify-center sm:mr-[0.8rem]" />
          <span className="hidden text-sm font-thin uppercase sm:inline-block">
            Menu
          </span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
