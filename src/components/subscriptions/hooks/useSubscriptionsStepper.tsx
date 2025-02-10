import { useCallback } from "react";
import { SubscriptionsStepsMapper } from "../types";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";

export const useSubscriptionsStepper = () => {
  const { dispatch, currentStep } = useSubscriptionsContext();

  const subscriptionStepValues = Object.values(SubscriptionsStepsMapper);

  const handleGoToNextStep = useCallback(() => {
    const currentIndex = subscriptionStepValues.indexOf(currentStep);
    if (currentIndex === subscriptionStepValues.length - 1) {
      return;
    }
    const nextIndex = currentIndex + 1;
    dispatch({ type: "SET_STEP", payload: subscriptionStepValues[nextIndex] });
  }, [currentStep, subscriptionStepValues]);

  const handleBackToPrevStep = useCallback(() => {
    const currentIndex = subscriptionStepValues.indexOf(currentStep);

    if (currentIndex > 0) {
      const prevStep = currentIndex - 1;
      dispatch({ type: "SET_STEP", payload: subscriptionStepValues[prevStep] });
    }
  }, [currentStep, subscriptionStepValues]);

  const lastStep =
    currentStep === subscriptionStepValues[subscriptionStepValues.length - 1];

  return {
    handleGoToNextStep,
    handleBackToPrevStep,
    lastStep,
  };
};
