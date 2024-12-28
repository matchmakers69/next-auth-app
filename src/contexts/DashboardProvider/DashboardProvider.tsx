"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import {
  DashboardContextInit,
  DashboardContextProviderProps,
  DashboardContextState,
} from "./defs";
import { reducer } from "./DashboardReducer";

const DashboardContext = createContext<DashboardContextInit | null>(null);

export const useDashboardContext = () => {
  const ctx = useContext(DashboardContext);

  if (!ctx) {
    throw new Error("Please make sure you wrapped by Provider");
  }
  return ctx;
};

const initState: DashboardContextState = {
  isSideBarInView: false,
};

const DashboardContextProvider = ({
  children,
}: DashboardContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state],
  );
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
