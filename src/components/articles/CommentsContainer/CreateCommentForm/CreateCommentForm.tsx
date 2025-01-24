"use client";

import { Button } from "@/components/ui/Button";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Controller, useForm } from "react-hook-form";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { CreateCommentFormProps } from "./defs";
import { CreateCommentValues } from "./validation/createCommentValidationSchema";
import {
  FormEvent,
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { createComment } from "@/actions/create-comment";
import { FormError } from "@/components/ui/formParts/FormError";
import { Loader, Reply } from "lucide-react";

const CreateCommentForm = ({
  postId,
  parentId,
  startOpen,
}: CreateCommentFormProps) => {
  const [open, setOpen] = useState(startOpen);
  const [state, formAction, isPending] = useActionState(
    createComment.bind(null, { postId, parentId }),
    {
      errors: {},
    },
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<CreateCommentValues>({
    mode: "onTouched",
    defaultValues: {
      content: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && isSubmitSuccessful) {
      reset();
      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [isSubmitSuccessful, reset, startOpen, state.success]);

  const form = (
    <form
      ref={formRef}
      className="flex w-full flex-col flex-wrap"
      autoComplete="off"
      noValidate
      action={formAction}
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(() => {
          startTransition(() => formAction(new FormData(formRef.current!)));
        })(event);
      }}
    >
      <div className="mb-10 mt-6">
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <MuiTextField
              id="comment-value"
              placeholder="Write a comment"
              name="content"
              fullWidth
              label="Comment"
              data-testid="commentValue"
              aria-label="Enter your comment"
              onChange={field.onChange}
              multiline
              rows={4}
              margin="none"
              value={field.value}
              error={!!state?.errors?.content}
            />
          )}
        />

        {state?.errors?.content && (
          <FormHelperText>{state?.errors?.content.join(", ")}</FormHelperText>
        )}
      </div>

      {state?.errors?._form ? (
        <div className="mb-8">
          <FormError message={state?.errors?._form.join(", ")} />
        </div>
      ) : null}

      <div className="button-wrapper flex w-full items-end justify-end">
        <Button type="submit" variant="default" size="sm" disabled={isPending}>
          {isPending && <Loader className="size-6 animate-spin" />}
          <span className="inline-block">
            {isPending ? "Creating now..." : "Create a comment"}
          </span>
        </Button>
      </div>
    </form>
  );
  return (
    <>
      <div className="reply-button-wrapper flex w-full items-start justify-end">
        <Button
          className="min-w-0 font-medium text-light-blue"
          size="sm"
          variant="link"
          onClick={() => setOpen(!open)}
        >
          <Reply />

          <span className="ml-3 inline-block">Reply</span>
        </Button>
      </div>
      {open && form}
    </>
  );
};

export default CreateCommentForm;
