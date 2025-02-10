"use client";

import { createContext, useContext, useReducer } from "react";
import { SubscriptionsContextType, SubscriptionsProviderProps } from "./defs";
import { SubscriptionsStepsMapper } from "@/components/subscriptions/types";
import { subscriptionsReducer } from "./reducer";

const SubscriptionsContext = createContext<SubscriptionsContextType | null>(
  null,
);

const initialSubscriptionsState = {
  // currentStep: SubscriptionsStepsMapper.generalInformation,
  currentStep: SubscriptionsStepsMapper.expenseInformation,
  subscriptionsGeneralInformation: null,
  expenseInformation: null,
};

export const useSubscriptionsContext = () => {
  const context = useContext(SubscriptionsContext);
  if (!context) {
    throw new Error(
      "useSubscriptions must be used within a SubscriptionsProvider",
    );
  }
  return context;
};

const SubscriptionsProvider = ({ children }: SubscriptionsProviderProps) => {
  const [state, dispatch] = useReducer(
    subscriptionsReducer,
    initialSubscriptionsState,
  );

  const value = {
    ...state,
    dispatch,
  };
  return (
    <SubscriptionsContext.Provider value={value}>
      {children}
    </SubscriptionsContext.Provider>
  );
};

export default SubscriptionsProvider;
