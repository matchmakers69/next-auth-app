import { SubscriptionGeneralInformation } from "../../types";

export type GeneralInfoFormStepProps = {
    title: string;
    onSubmit: (values: SubscriptionGeneralInformation) => void;
}