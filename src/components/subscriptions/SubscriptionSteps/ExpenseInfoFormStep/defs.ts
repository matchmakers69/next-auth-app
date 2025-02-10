import { FinalCreateSubscriptionStep } from "../../types";

export type ExpenseInfoFormProps = {
  title: string;
  onPrev: () => void;
} & FinalCreateSubscriptionStep;
