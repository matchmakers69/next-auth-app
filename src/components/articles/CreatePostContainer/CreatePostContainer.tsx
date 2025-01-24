"use client";

import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import CreatePostForm from "./CreatePostForm";
import { CreatePostContainerProps } from "./defs";

const CreatePostContainer = ({ slug }: CreatePostContainerProps) => {
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
          <span className="inline-block">New post</span>
        </Button>
      </div>
      {open && (
        <CreatePostForm slug={slug} open={open} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CreatePostContainer;
