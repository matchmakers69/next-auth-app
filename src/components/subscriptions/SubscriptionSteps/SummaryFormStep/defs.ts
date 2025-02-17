import { FinalCreateSubscriptionStep } from "../../types";

export type SummaryFormStepProps = {
  title: string;
  onPrev: () => void;
} & FinalCreateSubscriptionStep;
