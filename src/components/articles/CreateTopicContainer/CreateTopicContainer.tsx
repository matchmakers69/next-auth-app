"use client";

import { Plus } from "lucide-react";
import { useCallback, useState } from "react";
import CreateTopicForm from "../CreateTopicForm";
import { Button } from "@/components/ui/Button";

const CreateTopicContainer = () => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className="cta-button-wrapper flex w-full items-center justify-end">
        <Button
          onClick={() => setOpen(true)}
          type="button"
          size="lg"
          variant="secondary"
          className="flex flex-row items-center"
        >
          <Plus />
          <span className="max-sm:hidden ml-3 inline-block">Add new topic</span>
        </Button>
      </div>
      {open && <CreateTopicForm open={open} onClose={handleCloseModal} />}
    </>
  );
};

export default CreateTopicContainer;
