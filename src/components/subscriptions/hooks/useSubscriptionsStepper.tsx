import { useCallback } from "react";
import { SubscriptionsStepsMapper } from "../types";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";

export const useSubscriptionsStepper = () => {
  const { dispatch, currentStep } = useSubscriptionsContext();

  const stepValues = Object.values(SubscriptionsStepsMapper);

  const handleGoToNextStep = useCallback(() => {
    const currentIndex = stepValues.indexOf(currentStep);
    if (currentIndex === stepValues.length - 1) {
      return;
    }
    const nextIndex = currentIndex + 1;
    dispatch({ type: "SET_STEP", payload: stepValues[nextIndex] });
  }, [currentStep, stepValues]);

  const handleBackToPrevStep = useCallback(() => {
    const currentIndex = stepValues.indexOf(currentStep);

    if (currentIndex > 0) {
      const prevStep = currentIndex - 1;
      dispatch({ type: "SET_STEP", payload: stepValues[prevStep] });
    }
  }, [currentStep, stepValues]);

  const lastStep = currentStep === stepValues[stepValues.length - 1];

  return {
    handleGoToNextStep,
    handleBackToPrevStep,
    lastStep,
  };
};
