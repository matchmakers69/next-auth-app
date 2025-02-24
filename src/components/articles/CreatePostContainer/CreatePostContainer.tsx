"use client";

import { Button } from "@/components/ui/Button";
import CreatePostForm from "./CreatePostForm";
import { CreatePostContainerProps } from "./defs";
import { useFeatureSwitcher } from "@/hooks/useFeatureSwitcher";

const CreatePostContainer = ({ slug }: CreatePostContainerProps) => {
  const modalFeature = useFeatureSwitcher();

  return (
    <>
      <div className="cta-button-wrapper flex w-full items-center md:justify-end">
        <Button
          onClick={() => modalFeature.on()}
          type="button"
          size="sm"
          variant="secondary"
          className="flex flex-row items-center"
        >
          <span className="inline-block">New post</span>
        </Button>
      </div>
      {modalFeature.isOn && (
        <CreatePostForm
          slug={slug}
          open={modalFeature.isOn}
          onClose={modalFeature.off}
        />
      )}
    </>
  );
};

export default CreatePostContainer;
