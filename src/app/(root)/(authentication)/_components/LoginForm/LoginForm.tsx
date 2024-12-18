"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import {
  LoginFormValues,
  loginSchema,
} from "@/components/authentication/schemas/loginSchema";
import { Button } from "@/components/ui/Button";
import FormHelperText from "@/components/ui/formParts/FormHelperText";

const LoginForm: React.FC = () => {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  const handleSubmitLogin = (data: LoginFormValues) => {
    console.log("Submitted Data:", data);
  };

  return (
    <>
      <form
        className="w-full"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleSubmitLogin)}
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
                    placeholder="Enter your password"
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

        <Button
          type="submit"
          variant="default"
          size="full"
          disabled={!isDirty || isSubmitting}
        >
          Log In
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
          <p className="text-text-grey text-[12px]">Don’t have account yet?</p>
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
            <Link href="/auth/reset">Forgot your password?</Link>
          </Button>
        </div>
      </Stack>
    </>
  );
};

export default LoginForm;
