"use client";

import { useCallback, useState } from "react";
import CreateTopicForm from "../CreateTopicForm";
import { Button } from "@/components/ui/Button";

const TopicsContainer = () => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className="cta-button-wrapper flex w-full items-center justify-end">
        <Button
          onClick={() => setOpen(true)}
          size="sm"
          type="button"
          variant="secondary"
        >
          Create topic
        </Button>
      </div>
      {open && <CreateTopicForm open={open} onClose={handleCloseModal} />}
    </>
  );
};

export default TopicsContainer;
