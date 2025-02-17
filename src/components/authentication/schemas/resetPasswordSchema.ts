import { z } from "zod";

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is a required field" })
    .email("Invalid email address"),
});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
