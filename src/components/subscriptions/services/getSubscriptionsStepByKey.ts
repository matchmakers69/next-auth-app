import { FC } from "react";
import { ExpenseInfoFormStep } from "../SubscriptionSteps/ExpenseInfoFormStep";
import { GeneralInfoFormStep } from "../SubscriptionSteps/GeneralInfoFormStep";
import { SummaryFormStep } from "../SubscriptionSteps/SummaryFormStep";
import {
  SubscriptionExpenseInformation,
  SubscriptionGeneralInformation,
  SubscriptionsStepsMapper,
  SubscriptionsStepValue,
  SubscriptionSummary,
} from "../types";

type SubscriptionStepData =
  | SubscriptionGeneralInformation
  | SubscriptionExpenseInformation
  | SubscriptionSummary;

export type SubscriptionComponentProps<T> = {
  title: string;
  onPrev?: () => void;
  onSubmit: (_values: T) => void;
};

export type SubscriptionComponentType<T> = {
  title: string;
  component: FC<SubscriptionComponentProps<T>>;
};

export const getSubscriptionsStepByKey = (
  currentStep: SubscriptionsStepValue,
): SubscriptionComponentType<any> => {
  const SubscriptionsSteps: Record<
    SubscriptionsStepValue,
    SubscriptionComponentType<SubscriptionStepData>
  > = {
    [SubscriptionsStepsMapper.generalInformation]: {
      title: "General information",
      component: GeneralInfoFormStep as FC<
        SubscriptionComponentProps<SubscriptionGeneralInformation>
      >,
    },
    [SubscriptionsStepsMapper.expenseInformation]: {
      title: "Expense information",
      component: ExpenseInfoFormStep as React.FC<
        SubscriptionComponentProps<SubscriptionExpenseInformation>
      >,
    },
    [SubscriptionsStepsMapper.subscriptionSummary]: {
      title: "Subscription summary",
      component: SummaryFormStep as unknown as FC<
        SubscriptionComponentProps<
          SubscriptionGeneralInformation & SubscriptionExpenseInformation
        >
      >,
    },
  };

  return SubscriptionsSteps[currentStep as SubscriptionsStepValue];
};
