"use client";

import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller, useForm } from "react-hook-form";
import { CreateTopicValues } from "./validation/createTopicValidationSchema";
import { CreateTopicFormProps } from "./defs";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { createTopic } from "@/actions/create-topic";
import { startTransition, useActionState, useRef } from "react";
import { Loader } from "lucide-react";
import { InputSx } from "../../../ui/formParts/MuiTextField/muiTextFieldStyles";
import { FormError } from "@/components/ui/formParts/FormError";

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
  //     onClose();
  //     // reset();
  //   }
  // }, [isSubmitSuccessful]);

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
                  placeholder="Topic name"
                  label="Title"
                  variant="outlined"
                  error={!!state?.errors?.name}
                  fullWidth
                  margin="none"
                  sx={InputSx}
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
                  rows={6}
                  margin="none"
                  value={field.value}
                  error={!!state?.errors?.description}
                  sx={InputSx}
                />
              )}
            />

            {state?.errors?.description && (
              <FormHelperText>
                {state?.errors?.description.join(", ")}
              </FormHelperText>
            )}
          </div>

          {state?.errors?._form ? (
            <div className="mb-8">
              <FormError message={state?.errors?._form.join(", ")} />
            </div>
          ) : null}

          <div className="button-wrapper mt-6">
            <Button
              type="submit"
              variant="default"
              size="sm"
              disabled={isPending}
            >
              {isPending && <Loader className="size-6 animate-spin" />}
              <span className="inline-block">
                {isPending ? "Creating now..." : "Create topic"}
              </span>
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateTopicForm;
