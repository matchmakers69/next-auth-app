"use client";

import Modal from "@/components/ui/Modal";
import { CreateSubscriptionWizardProps } from "./defs";
import { Form, FormProvider, useForm } from "react-hook-form";
import { getSubscriptionsStepByKey } from "../../services";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { useSubscriptionsStepper } from "../../hooks/useSubscriptionsStepper";
import {
  ExpenseInformationSchema,
  GeneralInformationSchema,
} from "./schemas/subscriptionsStepsSchema";
import { SubscriptionStepValues } from "../../types";

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
        avatar_url: "https://dsc.cloud/88160a/Google-Avatar.png",
      },
      expenseInformation: {
        cost: undefined,
        currency: "",
        billingPeriod: "",
        nextPaymentDate: "",
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

      console.log(subscriptionsStepsData);
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
        <SubscriptionStepComponent
          title={subscriptionTitle}
          onPrev={handleBackToPrevStep}
          onSubmit={handleAddSubscriptionSubmit}
        />
      </FormProvider>
    </Modal>
  );
};

export default CreateSubscriptionWizard;
