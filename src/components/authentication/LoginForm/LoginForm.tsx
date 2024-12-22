"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";
import { Stack } from "@mui/material";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import { Button } from "@/components/ui/Button";
import FormHelperText from "@/components/ui/formParts/FormHelperText";
import { useLoginUser } from "../hooks/useLoginUser";
import { FormError } from "@/components/ui/formParts/FormError";
import { FormSuccess } from "@/components/ui/formParts/FormSuccess";

const LoginForm: React.FC = () => {
  const {
    submitLogin,
    control,
    errors,
    isDirty,
    isSubmitting,
    isPending,
    success,
    error,
    urlError,
    showTwoFactor,
  } = useLoginUser();

  return (
    <>
      <form
        className="w-full"
        autoComplete="off"
        noValidate
        onSubmit={submitLogin}
      >
        {showTwoFactor && (
          <div>
            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  id="code"
                  placeholder="Enter your code (optional)"
                  label="Verification Code"
                  variant="outlined"
                  error={!!errors.code}
                  fullWidth
                  margin="normal"
                />
              )}
            />
            {errors.code && (
              <FormHelperText>{errors.code.message}</FormHelperText>
            )}
          </div>
        )}
        {!showTwoFactor && (
          <Stack
            sx={{
              marginBottom: "30px",
            }}
            gap={1}
          >
            <div>
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
            </div>
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
        )}
        <div className="mb-8">
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
        </div>
        <Button
          type="submit"
          variant="default"
          size="full"
          disabled={!isDirty || isSubmitting || isPending}
        >
          {showTwoFactor ? "Confirm" : "Log in"}
        </Button>
      </form>
      <Stack
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
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
            <Link href="/auth/reset-password">Forgot your password?</Link>
          </Button>
        </div>
      </Stack>
    </>
  );
};

export default LoginForm;
