"use client";

import Modal from "@/components/ui/Modal";
import { CreateSubscriptionWizardProps } from "./defs";
import { Form, FormProvider, useForm } from "react-hook-form";
import { getSubscriptionsStepByKey } from "../../services";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { useCallback } from "react";
import { useSubscriptionsStepper } from "../../hooks/useSubscriptionsStepper";

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
    mode: "onSubmit",
  });

  const handleAddSubscriptionSubmit = (stepsValues: any) => {
    if (!currentStep) {
      throw new Error("Current step is not defined");
    }

    if (!lastStep) {
      handleGoToNextStep();
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
