import { ExpenseInfoFormStep } from "../SubscriptionSteps/ExpenseInfoFormStep";
import { GeneralInfoFormStep } from "../SubscriptionSteps/GeneralInfoFormStep";
import { SummaryFormStep } from "../SubscriptionSteps/SummaryFormStep";
import { SubscriptionsStepsMapper, SubscriptionsStepValue } from "../types";


export type SubscriptionComponentProps = {
    title: string;
    onPrev: () => void;
    onSubmit: (stepsValues: any) => void; //TODO: Define type for stepsValues
}

export type SubscriptionComponentType = {
    title: string;
    component: React.FC<SubscriptionComponentProps>;
};

export const getSubscriptionsStepByKey = (currentStep: SubscriptionsStepValue ) => {
    const SubscriptionsSteps: Record<SubscriptionsStepValue, SubscriptionComponentType> = {
        [SubscriptionsStepsMapper.generalInformation]: {
            title: "General information",
            component: GeneralInfoFormStep,
        },
        [SubscriptionsStepsMapper.expenseInformation]: {
            title: "Expense information",
            component: ExpenseInfoFormStep
        },
        [SubscriptionsStepsMapper.subscriptionSummary]: {  
            title: "Subscription summary",
            component: SummaryFormStep
        }
    };

return SubscriptionsSteps[currentStep as SubscriptionsStepValue];
}