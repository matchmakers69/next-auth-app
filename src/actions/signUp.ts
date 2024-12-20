"use server";
import bcrypt from "bcryptjs";

import {
  RegisterFormValues,
  registerSchema,
} from "@/components/authentication/schemas/registrationSchema";
import { getUserByEmail } from "@/data/user";
import { db } from "@/libs/db";
import { generateVerificationToken } from "@/libs/tokens";
import { sendVerificationEmail } from "@/libs/mail";

export const signUp = async (data: RegisterFormValues) => {
  // server site validation
  const validatedFields = registerSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Registration validation error",
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "User already exists!",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });


  // After registration we should verify user and send token to the user
  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return {
    success: "Confirmation email sent!",
  };
};
