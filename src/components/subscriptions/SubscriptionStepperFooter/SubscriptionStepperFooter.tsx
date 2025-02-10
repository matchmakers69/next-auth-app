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
    <div className="button-wrapper mt-20 flex items-end gap-6">
      {currentStep !== SubscriptionsStepsMapper.generalInformation && (
        <Button onClick={onPrev} size="sm" type="button" variant="default">
          Back to previous step
        </Button>
      )}
      <Button type="submit" variant="default" size="sm" disabled={isPending}>
        {isPending && <Loader className="size-6 animate-spin" />}
        <span className="inline-block">
          {isPending ? "Is submitting..." : ButtonsMapper[currentStep]}
        </span>
      </Button>
    </div>
  );
};

export default SubscriptionStepperFooter;
