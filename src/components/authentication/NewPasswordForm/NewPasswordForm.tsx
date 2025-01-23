"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";
import { Stack } from "@mui/material";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Button } from "@/components/ui/Button";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { FormError } from "@/components/ui/formParts/FormError";
import { FormSuccess } from "@/components/ui/formParts/FormSuccess";
import { useNewPassword } from "../hooks/useNewPassword";

const NewPasswordForm: React.FC = () => {
  const {
    newPasswordSubmit,
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
  } = useNewPassword();

  return (
    <>
      <form
        className="w-full"
        autoComplete="off"
        noValidate
        onSubmit={newPasswordSubmit}
      >
        <Stack
          sx={{
            marginBottom: "30px",
          }}
          gap={1}
        >
          <div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  type="password"
                  id="password"
                  placeholder="******************"
                  label="Password"
                  variant="outlined"
                  error={!!errors.password}
                  fullWidth
                  margin="normal"
                />
              )}
            />
            {errors.password && (
              <FormHelperText>{errors.password.message}</FormHelperText>
            )}
          </div>
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
          Reset your password
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

export default NewPasswordForm;
