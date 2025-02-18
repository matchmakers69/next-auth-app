"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CreateSubscriptionWizard } from "./CreateSubscriptionWizard";

const CreateSubscriptionContainer = () => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className="cta-button-wrapper flex w-full items-center md:justify-end">
        <Button
          onClick={() => setOpen(true)}
          type="button"
          size="sm"
          variant="secondary"
          className="flex flex-row items-center"
        >
          <span className="inline-block">New subscription</span>
        </Button>
      </div>
      {open && (
        <CreateSubscriptionWizard open={open} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CreateSubscriptionContainer;
