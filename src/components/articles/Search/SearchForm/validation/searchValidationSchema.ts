import { z } from "zod";

export const searchValidationSchema = z.object({
  term: z
    .string()
    .min(1, { message: "Please enter your search criteria" })
    .max(50, {
      message: "Sorry, too many characters. 50 characters allowed.",
    }),
});

export type SearchPostsValues = z.infer<typeof searchValidationSchema>;
