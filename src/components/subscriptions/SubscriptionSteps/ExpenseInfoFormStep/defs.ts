import { SubscriptionExpenseInformation } from "../../types";

export type ExpenseInfoFormProps = {
  title: string;
  onPrev: () => void;
  onSubmit: (values: SubscriptionExpenseInformation) => void; 
};
