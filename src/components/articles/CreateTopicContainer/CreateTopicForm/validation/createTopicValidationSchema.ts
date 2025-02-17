import { z } from "zod";

export const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, "Minimum 3 characters are required")
    .max(30, "Too many characters. Maximum is 30")
    .regex(/^[a-z-]+$/, {
      message:
        "Must be lowercase letters or dashes without spaces, numbers not allowed",
    }),

  description: z
    .string()
    .min(10, "Minimum 10 characters are required")
    .max(200, "Too many characters. Maximum is 200"),
});

export type CreateTopicValues = z.infer<typeof createTopicSchema>;
