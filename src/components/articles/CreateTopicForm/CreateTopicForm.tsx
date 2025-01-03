"use client";

import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller, useForm } from "react-hook-form";
import { CreateTopicValues } from "./validation/createTopicValidationSchema";
import { CreateTopicFormProps } from "./defs";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { createTopicSx } from "./helper/muiTextFieldStyles";
import { createTopic } from "@/actions/create-topic";
import { startTransition, useActionState, useRef } from "react";

const CreateTopicForm = ({ open, onClose }: CreateTopicFormProps) => {
  const [state, formAction, isPending] = useActionState(createTopic, {
    errors: {},
  });

  const {
    control,
    handleSubmit,
    reset,
    // formState: { isSubmitSuccessful },
  } = useForm<CreateTopicValues>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  // Sometimes might be useful - not required here due to user is redirected anyway
  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [reset, isSubmitSuccessful]);

  return (
    <>
      <Modal
        open={open}
        title="Create new topic"
        additionalPaperProps={{
          sx: {
            lg: {
              minWidth: "64rem",
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
          className="flex w-full flex-col flex-wrap"
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
                  error={!!state?.errors?.name}
                  fullWidth
                  margin="none"
                  sx={createTopicSx}
                />
              )}
            />

            {state?.errors?.name && (
              <FormHelperText>{state.errors.name.join(", ")}</FormHelperText>
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
                  error={!!state?.errors?.description}
                  sx={createTopicSx}
                />
              )}
            />

            {state?.errors?.description && (
              <FormHelperText>
                {state?.errors?.description.join(", ")}
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
