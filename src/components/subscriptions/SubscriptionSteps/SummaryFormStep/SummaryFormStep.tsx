import { SubscriptionStepperFooter } from "../../SubscriptionStepperFooter";
import { SummaryFormStepProps } from "./defs";

const SummaryFormStep = ({ title, onPrev }: SummaryFormStepProps) => {
  return (
    <>
      <h4 className="mb-10 text-sm font-semibold">{title}</h4>
      <SubscriptionStepperFooter onPrev={onPrev} />
    </>
  );
};

export default SummaryFormStep;
