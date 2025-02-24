"use client";

import { Button } from "@/components/ui/Button";
import { CreateSubscriptionWizard } from "./CreateSubscriptionWizard";
import { useFeatureSwitcher } from "@/hooks/useFeatureSwitcher";

const CreateSubscriptionContainer = () => {
  const featureModal = useFeatureSwitcher();

  return (
    <>
      <div className="cta-button-wrapper flex w-full items-center md:justify-end">
        <Button
          onClick={() => featureModal.on()}
          type="button"
          size="sm"
          variant="secondary"
          className="flex flex-row items-center"
        >
          <span className="inline-block">New subscription</span>
        </Button>
      </div>
      {featureModal.isOn && (
        <CreateSubscriptionWizard
          open={featureModal.isOn}
          onClose={featureModal.off}
        />
      )}
    </>
  );
};

export default CreateSubscriptionContainer;
