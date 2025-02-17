import { SubscriptionGeneralInformation } from "../../types";

export type GeneralInfoFormStepProps = {
  title: string;
  onSubmit: (_values: SubscriptionGeneralInformation) => void;
};
