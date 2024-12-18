import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is required field" })
    .max(30, { message: "Name must be a maximun 30 characters" })
    .refine(
      (value) => {
        // Check if the name contains only one space between words
        return /^\s*\S+(\s+\S+)*\s*$/.test(value);
      },
      { message: "Spaces are not allowed" },
    ),
  email: z
    .string()
    .min(1, { message: "Email is required field" })
    .email("Invalid email address"),
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

export type RegisterFormValues = z.infer<typeof registerSchema>;
