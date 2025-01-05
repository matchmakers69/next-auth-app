"use client";

import { Plus } from "lucide-react";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import CreatePostForm from "./CreatePostForm";

const CreatePostContainer = () => {
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
          size="lg"
          variant="secondary"
          className="flex flex-row items-center"
        >
          <Plus />
          <span className="max-sm:hidden ml-3 inline-block">Add post</span>
        </Button>
      </div>
      {open && <CreatePostForm open={open} onClose={handleCloseModal} />}
    </>
  );
};

export default CreatePostContainer;
