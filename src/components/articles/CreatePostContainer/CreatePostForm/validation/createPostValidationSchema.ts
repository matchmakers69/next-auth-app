import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(3, "Minimum 3 characters are required")
    .max(30, "Too many characters. Maximum is 80"),

  content: z
    .string()
    .min(10, "Minimum 10 characters are required")
    .max(1000, "Too many characters. Maximum is 1000"),
});

export type CreatePostValues = z.infer<typeof createPostSchema>;
