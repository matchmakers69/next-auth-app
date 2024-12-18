import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required field" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters long" }),
  code: z.optional(
    z
      .string()
      .min(6, { message: "Code must be at least 6 digits" })
      .max(6, { message: "Code cannot be longer then 6 digits" })
      .refine((value) => /^\d+$/.test(value), {
        message: "Code must include only digits",
      }),
  ),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
