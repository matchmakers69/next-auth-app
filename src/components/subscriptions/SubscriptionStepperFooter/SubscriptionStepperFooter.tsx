"use client";

import { Button } from "@/components/ui/Button";
import { SubscriptionStepperFooterProps } from "./defs";
import { SubscriptionsStepsMapper } from "../../subscriptions/types";
import { useSubscriptionsContext } from "@/contexts/SubscriptionsProvider/SubscriptionsProvider";
import { Loader } from "lucide-react";

const ButtonsMapper = {
  [SubscriptionsStepsMapper.generalInformation]: "Go next",
  [SubscriptionsStepsMapper.expenseInformation]: "Go next",
  [SubscriptionsStepsMapper.subscriptionSummary]: "Add subscription",
};

const SubscriptionStepperFooter = ({
  onPrev = () => undefined,
  isPending = false,
}: SubscriptionStepperFooterProps) => {
  const { currentStep } = useSubscriptionsContext();

  return (
    <footer className="button-wrapper mt-20 flex w-full items-center justify-center gap-10 py-6">
      {currentStep !== SubscriptionsStepsMapper.generalInformation && (
        <Button
          onClick={onPrev}
          size="sm"
          type="button"
          className="border-light-blue text-light-blue"
          variant="outline"
        >
          Back to previous step
        </Button>
      )}
      <Button type="submit" variant="default" size="sm" disabled={isPending}>
        {isPending && <Loader className="size-6 animate-spin" />}
        <span className="inline-block">
          {isPending ? "Is submitting..." : ButtonsMapper[currentStep]}
        </span>
      </Button>
    </footer>
  );
};

export default SubscriptionStepperFooter;
