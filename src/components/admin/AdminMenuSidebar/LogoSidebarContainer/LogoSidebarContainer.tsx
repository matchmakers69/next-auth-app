"use client";

import { X } from "lucide-react";
import { LogoSidebarContainerProps } from "./defs";
import { useDashboardContext } from "@/contexts/DashboardProvider/DashboardProvider";

const LogoSidebarContainer = ({ children }: LogoSidebarContainerProps) => {
  const { dispatch } = useDashboardContext();
  const handleCloseLeftSidebar = () => {
    dispatch({
      type: "CLOSE_SIDEBAR",
      payload: false,
    });
  };
  return (
    <div className="flex items-center justify-between lg:block">
      {children}
      <button
        className="sidebar-close-menu flex h-[3rem] w-[3rem] cursor-pointer flex-col items-center justify-center border border-[rgb(175,175,175)] focus:outline-none focus:ring-1 focus-visible:ring-offset-1 md:hidden lg:p-[10px]"
        onClick={handleCloseLeftSidebar}
        type="button"
        aria-label="close navigation sidebar"
      >
        <X size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default LogoSidebarContainer;
