"use client";

import { Button } from "@/components/ui/Button";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller, useForm } from "react-hook-form";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { FormEvent, startTransition, useActionState, useRef } from "react";
import { Loader } from "lucide-react";
import { CreatePostValues } from "./validation/createPostValidationSchema";
import { CreatePostFormProps } from "./defs";
import { createPost } from "@/actions/create-post";
import { FormError } from "@/components/ui/formParts/FormError";
import { Modal } from "@/components/ui/Modal";

const CreatePostForm = ({ open, onClose, slug }: CreatePostFormProps) => {
  const [state, formAction, isPending] = useActionState(
    createPost.bind(null, slug),
    {
      errors: {},
    },
  );

  const { control, handleSubmit, reset } = useForm<CreatePostValues>({
    mode: "onTouched",
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <Modal
        open={open}
        title="Add a new post"
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
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleSubmit(() => {
              startTransition(() => {
                formAction(new FormData(formRef.current!));
              });
            })(event);
          }}
        >
          <div className="mb-12">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  id="title"
                  placeholder="Post title"
                  label="Title"
                  variant="outlined"
                  error={!!state?.errors?.title}
                  fullWidth
                  margin="none"
                />
              )}
            />

            {state?.errors?.title && (
              <FormHelperText>{state.errors.title.join(", ")}</FormHelperText>
            )}
          </div>
          <div>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  id="content-value"
                  placeholder="Describe your content"
                  name="content"
                  fullWidth
                  label="Content"
                  data-testid="contentValue"
                  aria-label="Enter content"
                  onChange={field.onChange}
                  multiline
                  rows={6}
                  margin="none"
                  value={field.value}
                  error={!!state?.errors?.content}
                />
              )}
            />

            {state?.errors?.content && (
              <FormHelperText>
                {state?.errors?.content.join(", ")}
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
                {isPending ? "Creating now..." : "Create post"}
              </span>
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreatePostForm;
