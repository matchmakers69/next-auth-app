import { z } from "zod";

export const searchValidationSchema = z.object({
  topic: z
    .string()
    .min(1, { message: "Please enter your search criteria" }).max(50, {
        message: "Sorry, too many characters. 50 characters allowed." 
    })


});

export type SearchTopicsValues = z.infer<typeof searchValidationSchema>;
