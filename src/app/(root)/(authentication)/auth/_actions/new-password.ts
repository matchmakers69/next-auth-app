"use server";

import bcrypt from "bcryptjs";

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import {
  NewPasswordFormValues,
  newPasswordSchema,
} from "@/components/authentication/schemas/newPasswordSchema";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const newPassword = async (
  values: NewPasswordFormValues,
  token?: string | null,
) => {
  if (!token) {
    return {
      error: "New password missing token",
    };
  }

  // Fields validation
  const validatedFields = newPasswordSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Sorry some fields are invalid",
    };
  }

  const { password } = validatedFields.data;
  // token validation
  const existingToken = await getPasswordResetTokenByToken(token);
  // Finding token in database
  if (!existingToken) {
    return { error: "New password invalid token" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return {
      error: "Token has expired",
    };
  }

  // We check existing user which match password
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return {
      error: "Sorry but email does not exist",
    };
  }

  // Finally hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return {
    success: "Congrats! Your new password has been updated",
  };
};
