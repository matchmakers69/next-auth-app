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
import { InputSx } from "../styles/muiTextFieldStyles";
import { Loader } from "lucide-react";

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
      <div className="mb-12">
        <Controller
          name="content"
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
              error={!!state?.errors?.content}
              sx={InputSx}
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

      <div className="button-wrapper mt-6">
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
    <div>
      <Button size="sm" variant="secondary" onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && form}
    </div>
  );
};

export default CreateCommentForm;
