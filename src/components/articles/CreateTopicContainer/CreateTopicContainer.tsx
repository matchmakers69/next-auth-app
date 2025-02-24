"use client";

import { useFeatureSwitcher } from "@/hooks/useFeatureSwitcher";
import { Button } from "@/components/ui/Button";
import { CreateTopicForm } from "./CreateTopicForm";

const CreateTopicContainer = () => {
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
          <span className="inline-block">New topic</span>
        </Button>
      </div>
      {featureModal.isOn && (
        <CreateTopicForm open={featureModal.isOn} onClose={featureModal.off} />
      )}
    </>
  );
};

export default CreateTopicContainer;
