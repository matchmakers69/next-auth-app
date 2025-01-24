"use client";

import { Button } from "@/components/ui/Button";
import { GeneralInfoFormStepProps } from "./defs";
import { SubscriptionsCategorySelector } from "../../CreateSubscriptionContainer/SubscriptionsCategorySelector";

const GeneralInfoFormStep = ({ title, onSubmit }: GeneralInfoFormStepProps) => {
  return (
    <div>
      <h4>{title}</h4>

      <Button onClick={onSubmit} variant="default" size="sm">
        Next
      </Button>
    </div>
  );
};

export default GeneralInfoFormStep;
