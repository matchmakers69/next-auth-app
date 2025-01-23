"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";
import { Stack } from "@mui/material";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Button } from "@/components/ui/Button";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { FormError } from "@/components/ui/formParts/FormError";
import { FormSuccess } from "@/components/ui/formParts/FormSuccess";
import { useResetPassword } from "../hooks/useResetPassword";

const ResetPasswordForm: React.FC = () => {
  const {
    submitPasswordReset,
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
  } = useResetPassword();

  return (
    <>
      <form
        className="w-full"
        autoComplete="off"
        noValidate
        onSubmit={submitPasswordReset}
      >
        <Stack
          sx={{
            marginBottom: "30px",
          }}
          gap={1}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <MuiTextField
                {...field}
                type="email"
                id="email"
                placeholder="Enter your email"
                label="Email"
                variant="outlined"
                error={!!errors.email}
                fullWidth
                margin="normal"
              />
            )}
          />
          {errors.email && (
            <FormHelperText>{errors.email.message}</FormHelperText>
          )}
        </Stack>

        <div className="mb-8">
          <FormError message={error} />
          <FormSuccess message={success} />
        </div>
        <Button
          type="submit"
          variant="default"
          size="full"
          disabled={!isDirty || isSubmitting || isPending}
        >
          Recover password
        </Button>
      </form>
      <Stack
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        marginTop={2}
      >
        <div className="flex items-center gap-[8px]">
          <p className="text-[12px] text-text-grey">Don’t have account yet?</p>
          <Button
            className="flex-start min-w-[auto] px-0 underline"
            asChild
            variant="link"
            size="sm"
          >
            <Link href="/auth/register">Sign up</Link>
          </Button>
        </div>
        <div className="flex gap-[8px]">
          <Button
            className="flex-start min-w-[auto] px-0 underline"
            asChild
            variant="link"
            size="sm"
          >
            <Link href="/auth/login">Back to login</Link>
          </Button>
        </div>
      </Stack>
    </>
  );
};

export default ResetPasswordForm;
