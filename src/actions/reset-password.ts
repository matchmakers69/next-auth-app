"use server";

import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from "@/components/authentication/schemas/resetPasswordSchema";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/libs/mail";

import { generatePasswordResetToken } from "@/libs/tokens";

export const resetPassword = async (values: ResetPasswordFormValues) => {
  const validatedFields = resetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid email address",
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      error: "Sorry, email has not been found!",
    };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: "Reset password email has been sent! Check your email." };
};
