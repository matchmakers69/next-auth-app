"use client";

import { useDashboardContext } from "@/contexts/DashboardProvider/DashboardProvider";
import { SidebarLeftContainerProps } from "./defs";

const SidebarLeftContainer = ({ children }: SidebarLeftContainerProps) => {
  const { isSideBarInView } = useDashboardContext();

  return (
    <aside
      className={`border-dark-border bg-dark-grey fixed inset-y-0 left-0 w-[32rem] flex-shrink-0 border-r transition-transform duration-300 ease-in-out ${isSideBarInView ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      {children}
    </aside>
  );
};

export default SidebarLeftContainer;
