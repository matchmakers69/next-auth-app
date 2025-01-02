"use client";

import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller } from "react-hook-form";
import { CreateTopicFormProps } from "./defs";
import { useCreateTopic } from "./hooks/useCreateTopic";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { createTopicSx } from "./helper/muiTextFieldStyles";
import { createTopic } from "@/actions/create-topic";
import { startTransition, useActionState, useRef } from "react";

const CreateTopicForm = ({ open, onClose }: CreateTopicFormProps) => {
  const { reset, control, handleSubmit } = useCreateTopic();

  const [formState, formAction, isPending] = useActionState(createTopic, {
    success: false,
    errors: {},
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <Modal
        open={open}
        title="Create new topic"
        additionalPaperProps={{
          role: "document",
          sx: {
            maxWidth: "800px",
            boxShadow: `0px 4px 8px -4px rgb(0 0 0 / 48%)`,
            margin: "1.6rem",
            minWidth: "58rem",
            md: {
              minWidth: "72.5rem",
            },
          },
        }}
        onClose={() => {
          onClose();
          reset();
        }}
      >
        <form
          ref={formRef}
          className="w-full"
          autoComplete="off"
          noValidate
          action={formAction}
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleSubmit(() => {
              startTransition(() => formAction(new FormData(formRef.current!)));
            })(event);
          }}
        >
          <div className="mb-12">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  id="name"
                  placeholder="Enter topic name"
                  label="Title"
                  variant="outlined"
                  error={!!formState?.errors?.name}
                  fullWidth
                  margin="none"
                  sx={createTopicSx}
                />
              )}
            />

            {formState?.errors?.name && (
              <FormHelperText>
                {formState.errors.name.join(", ")}
              </FormHelperText>
            )}
          </div>
          <div>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  id="description-value"
                  placeholder="Describe your topic"
                  name="description"
                  fullWidth
                  label="Description"
                  data-testid="descriptionValue"
                  aria-label="Enter description"
                  onChange={field.onChange}
                  multiline
                  rows={4}
                  margin="none"
                  value={field.value}
                  error={!!formState?.errors?.description}
                  sx={createTopicSx}
                />
              )}
            />

            {formState?.errors?.description && (
              <FormHelperText>
                {formState?.errors?.description.join(", ")}
              </FormHelperText>
            )}
          </div>

          <div className="button-wrapper mt-6">
            <Button
              type="submit"
              variant="default"
              size="sm"
              disabled={isPending}
            >
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateTopicForm;
