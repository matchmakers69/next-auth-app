import { z } from "zod";

export const newPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(30, { message: "Password too long. 30 characters only" })
    .regex(new RegExp(".*[A-Z].*"), {
      message: "Password must conatain an uppercase character",
    })
    .regex(new RegExp(".*\\d.*"), {
      message: "Password must contain a number",
    })
    .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
      message: "Password must contain a special character",
    }),
});

export type NewPasswordFormValues = z.infer<typeof newPasswordSchema>;
