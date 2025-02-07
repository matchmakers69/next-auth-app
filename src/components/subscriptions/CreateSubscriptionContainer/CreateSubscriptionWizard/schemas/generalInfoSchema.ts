import { z } from "zod";
import { SUBSCRIPTION_CATEGORY_LABEL } from "@prisma/client";

const validCategories = Object.values(SUBSCRIPTION_CATEGORY_LABEL) as string[];

export const GeneralInfoSchema = z.object({
  name: z.string().min(1, "Subscription title is required field"),
  category: z.enum(validCategories as [string, ...string[]], {
    // Explicit cast to tuple
    errorMap: () => {
      return { message: "You have to select a category" };
    },
  }),
  avatarUrl: z
    .string()
    .max(500, {
      message: "Too many characters for avatar url field. Max is 500",
    })
    .url("Enter a correct URL!")
    .nullish() // Allow null or undefined
    .refine(
      (val) =>
        !val ||
        /((https?):\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(
          val,
        ),
      {
        message: "Enter correct url!",
      },
    )
    .optional(),
});

export type GeneralInfoSchemaType = z.infer<typeof GeneralInfoSchema>;
