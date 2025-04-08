import { z } from "zod";

export const updateUserSettingsSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name is a required field" })
      .max(30, { message: "Too many characters for name field. Max is 30" })
      .nullish()
      .transform((val) => (val === "" ? undefined : val))
      .optional(),
    email: z
      .string()
      .email("Sorry, wrong email format")
      .nullish()
      .transform((val) => (val === "" ? undefined : val))
      .optional(),
    password: z
      .string()
      .nullish()
      .transform((val) => (val === "" ? undefined : val))
      .optional(),
    newPassword: z
      .string()
      .nullish()
      .transform((val) => (val === "" ? undefined : val))
      .optional(),
      avatar: z.union([
        z.instanceof(File, {message: "Image is required"})
         .refine(file => !file || file.size !== 0 || file.size <= 5000000, {message:"Max size exceeded"}),
        z.string().optional() // to hold default image
      ])
      .refine(value => value instanceof File || typeof value === "string", {
        message: "Image is required"
      }).optional(),
    // avatar: z
    //   .any()
    //   .refine(
    //     (file) => {
    //       if (!file) return true; // optional
    //       return file instanceof File && file.size < 5 * 1024 * 1024; // under 5MB
    //     },
    //     {
    //       message: "Avatar must be an image file under 5MB",
    //     },
    //   )
    //   .optional(),
  })
  .refine(
    (data) => {
      if (data.password || data.newPassword) {
        return !!data.password && !!data.newPassword;
      }
      return true;
    },
    {
      message: "Both password and new password must be provided together!",
      path: ["password"],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword) {
        const passwordRegex =
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        return passwordRegex.test(data.newPassword);
      }
      return true;
    },
    {
      message:
        "New password must be at least 6 characters long and contain at least one uppercase character, one lowercase character, one number, and one special symbol",
      path: ["newPassword"],
    },
  );

export type UpdateUserSettingsValues = z.infer<typeof updateUserSettingsSchema>;
