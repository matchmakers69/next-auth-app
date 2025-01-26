import { SubscriptionExpenseInformation, SubscriptionGeneralInformation, SubscriptionsStepValue } from "@/components/subscriptions/types";
import { BaseProps } from "@/components/ui/types/defs";
import {
  SUBSCRIPTION_BILLING_PERIOD,
  SUBSCRIPTION_CURRENCY,
} from "@prisma/client";
import { Dispatch } from "react";

export type SubscriptionsProviderProps = BaseProps;

export type SubscriptionsStateInitial = {
  currentStep: SubscriptionsStepValue;
  subscriptionsGeneralInformation: SubscriptionGeneralInformation | null;
  expenseInformation: SubscriptionExpenseInformation | null;
};

export type SubscriptionsAction =
  | { type: "SET_STEP"; payload: SubscriptionsStepValue }
  | { type: "SET_GENERAL_INFORMATION"; payload: SubscriptionGeneralInformation }
  | {
      type: "SET_EXPENSE_INFORMATION";
      payload: SubscriptionExpenseInformation;
    };

export type SubscriptionsContextType = SubscriptionsStateInitial & {
  dispatch: Dispatch<SubscriptionsAction>;
};
