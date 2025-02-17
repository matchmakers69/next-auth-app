import { z } from "zod";

export const createCommentSchema = z.object({
  content: z
    .string()
    .min(3, "Minimum 3 characters are required")
    .max(1000, "Too many characters. Maximum is 1000"),
});

export type CreateCommentValues = z.infer<typeof createCommentSchema>;
