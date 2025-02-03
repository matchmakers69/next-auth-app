"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CreateTopicForm } from "./CreateTopicForm";

const CreateTopicContainer = () => {
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
          <span className="inline-block">New topic</span>
        </Button>
      </div>
      {open && <CreateTopicForm open={open} onClose={handleCloseModal} />}
    </>
  );
};

export default CreateTopicContainer;
