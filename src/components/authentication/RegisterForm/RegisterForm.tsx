"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { MuiTextField } from "@/components/ui/formParts/MuiTextField";
import {
  RegisterFormValues,
  registerSchema,
} from "@/components/authentication/schemas/registrationSchema";
import { Button } from "@/components/ui/Button";
import FormHelperText from "@/components/ui/formParts/FormHelperText";

const RegisterForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleRegisterUser = (data: RegisterFormValues) => {
    console.log("Submitted Data:", data);
  };

  return (
    <>
      <form
        className="w-full"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleRegisterUser)}
      >
        <Stack
          sx={{
            marginBottom: "30px",
          }}
          gap={1}
        >
          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  {...field}
                  id="name"
                  placeholder="Enter your name"
                  label="Name"
                  variant="outlined"
                  error={!!errors.name}
                  fullWidth
                  margin="normal"
                />
              )}
            />
            {errors.name && (
              <FormHelperText>{errors.name.message}</FormHelperText>
            )}
          </div>
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

        <Button
          type="submit"
          variant="default"
          size="full"
          disabled={!isDirty || isSubmitting}
        >
          Sign up
        </Button>
      </form>

      <div className="flex w-full items-center gap-[8px]">
        <p className="text-[12px] text-text-grey">Have an account?</p>
        <Button
          className="flex-start min-w-[auto] px-0 underline"
          asChild
          variant="link"
          size="sm"
        >
          <Link href="/auth/login">Sign in</Link>
        </Button>
      </div>
    </>
  );
};

export default RegisterForm;
