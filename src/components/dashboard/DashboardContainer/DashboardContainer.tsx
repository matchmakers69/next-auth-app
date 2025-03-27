"use client";

import { DashboardContainerProps } from "./defs";
import { useDashboardContext } from "@/contexts/DashboardProvider/DashboardProvider";
import DashboardHeader from "../DashboardHeader";

const DashboardContainer = ({ children }: DashboardContainerProps) => {
  const { dispatch, isSideBarInView } = useDashboardContext();

  const handleOpenSidebar = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR",
      payload: !isSideBarInView,
    });
  };

  return (
    <>
      <main className="flex flex-1 flex-col lg:min-w-0 lg:pl-[32rem]">
        <DashboardHeader onOpenSidebar={handleOpenSidebar} />
        <div className="dashboard-content grow">
          <div className="dashboard-content-inner px-14 py-20 md:px-16">
            <div className="mx-auto">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardContainer;
