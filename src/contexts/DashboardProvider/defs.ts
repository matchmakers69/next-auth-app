import { BaseProps } from "@/components/ui/types/defs";
import { Dispatch } from "react";

export type DashboardContextProviderProps = BaseProps;
export type DashboardContextState = {
    isSideBarInView: boolean
}

export type DashboardContextAction = | {type: "TOGGLE_SIDEBAR", payload: boolean} | {
    type: "CLOSE_SIDEBAR", payload: boolean
}

export type DashboardContextInit = {
    isSideBarInView: boolean;
    dispatch: Dispatch<DashboardContextAction>
}