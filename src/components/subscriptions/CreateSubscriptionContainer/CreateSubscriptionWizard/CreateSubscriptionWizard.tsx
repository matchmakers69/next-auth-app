"use client";

import { CreateSubscriptionWizardProps } from "./defs";
import { FormProvider, useForm } from "react-hook-form";
import { getSubscriptionsStepByKey } from "../../services";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { useSubscriptionsStepper } from "../../hooks/useSubscriptionsStepper";
import {
  ExpenseInformationSchema,
  GeneralInformationSchema,
} from "./schemas/subscriptionsStepsSchema";
import { SubscriptionStepValues } from "../../types";
import { LocationProvider } from "@/components/providers/LocationProvider";
import { Modal } from "@/components/ui/Modal";
import { formattedCurrentDate } from "@/utils/dates";

const schemas = {
  subscriptionsGeneralInformation: GeneralInformationSchema,
  expenseInformation: ExpenseInformationSchema,
};

const CreateSubscriptionWizard = ({
  open,
  onClose,
}: CreateSubscriptionWizardProps) => {
  const { currentStep } = useSubscriptionsContext();
  const { handleGoToNextStep, handleBackToPrevStep, lastStep } =
    useSubscriptionsStepper();

  const SubscriptionStepComponent =
    getSubscriptionsStepByKey(currentStep).component;
  const subscriptionTitle = getSubscriptionsStepByKey(currentStep).title;

  // Creating a new subscription login
  const methods = useForm({
    mode: "all",
    // resolver: zodResolver(schemas[currentStep]),
    defaultValues: {
      subscriptionsGeneralInformation: {
        name: "",
        category: "",
        avatarUrl: "https://dsc.cloud/88160a/Google-Avatar.png",
      },
      expenseInformation: {
        cost: 0,
        currency: "",
        billingPeriod: "",
        nextPaymentDate: null,
      },
    },
  });

  const handleAddSubscriptionSubmit = (stepValues: SubscriptionStepValues) => {
    if (!currentStep) {
      throw new Error("Current step is not defined");
    }

    if (!lastStep) {
      handleGoToNextStep();
    } else {
      const subscriptionsStepsData: SubscriptionStepValues = {
        ...methods.getValues(),
        ...stepValues,
      };

      console.log(subscriptionsStepsData, "cg=hujek");
    }
  };

  return (
    <Modal
      open={open}
      title="Add new subscription"
      additionalPaperProps={{
        sx: {
          lg: {
            minWidth: "64rem",
          },
        },
      }}
      onClose={() => {
        onClose();
        methods.reset();
      }}
    >
      <FormProvider {...methods}>
        <LocationProvider>
          <SubscriptionStepComponent
            title={subscriptionTitle}
            onPrev={handleBackToPrevStep}
            onSubmit={handleAddSubscriptionSubmit}
          />
        </LocationProvider>
      </FormProvider>
    </Modal>
  );
};

export default CreateSubscriptionWizard;
