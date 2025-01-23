"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import paths from "@/utils/paths";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/libs/currentUser";
import { generateVerificationToken } from "@/libs/tokens";
import { sendVerificationEmail } from "@/libs/mail";
import { db } from "@/libs/db";
import { updateUserSettingsSchema } from "@/components/dashboard/SettingsContainer/FormUpdateUser/validation/updateUserSettingsSchema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Prisma } from "@prisma/client";

type UpdateUserSettingsFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    newPassword?: string[];
    _form?: string[];
  };
  success?: string;
  updatedUser?: {
    name: string | null;
    email: string | null;
  };
};

export async function updateUserSettings(
  prevState: UpdateUserSettingsFormState,
  formData: FormData,
): Promise<UpdateUserSettingsFormState> {
  const result = updateUserSettingsSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    newPassword: formData.get("newPassword"),
  });

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { errors };
  }

  const user = await currentUser();
  console.log(user, "user");
  if (!user || !user.id) {
    return {
      errors: {
        _form: ["You must be authorized to do this."],
      },
    };
  }

  const dbUser = await getUserById(user.id);
  if (!dbUser) {
    return {
      errors: {
        _form: ["You must be authorized to do this."],
      },
    };
  }

  if (user.is0Auth) {
    result.data.email = undefined;
    result.data.password = undefined;
    result.data.newPassword = undefined;
  }

  if (result.data.email && result.data.email !== user.email) {
    const existingUser = await getUserByEmail(result.data.email);
    if (existingUser && existingUser.id !== user.id) {
      return {
        errors: {
          email: ["Email already used"],
        },
      };
    }

    const verificationToken = await generateVerificationToken(
      result.data.email,
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return {
      success: "Verification email sent!",
    };
  }

  if (result.data.password && result.data.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      result.data.password,
      dbUser.password,
    );
    if (!passwordsMatch) {
      return { errors: { password: ["Incorrect password!"] } };
    }

    const hashedPassword = await bcrypt.hash(result.data.newPassword, 10);
    result.data.password = hashedPassword;
    result.data.newPassword = undefined;
  }

  const updateData: Prisma.UserUpdateInput = {};

  if (result.data.name !== undefined && result.data.name !== null) {
    updateData.name = result.data.name;
  }

  if (result.data.email !== undefined && result.data.email !== null) {
    updateData.email = result.data.email;
  }

  if (result.data.password !== undefined && result.data.password !== null) {
    updateData.password = result.data.password;
  }

  // Check if any data to update
  if (Object.keys(updateData).length === 0) {
    return {
      errors: {
        _form: ["No changes to update. Please modify at least one field."],
      },
    };
  }

  try {
    const updatedUser = await db.user.update({
      where: { id: dbUser.id },
      data: updateData,
    });
    revalidatePath(paths.settings());
    return {
      success: "Settings updated!",
      errors: {},
      updatedUser: {
        name: updatedUser.name,
        email: updatedUser.email,
      },
    };
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
      return { errors: { email: ["Email already used"] } };
    }

    if (
      err instanceof PrismaClientKnownRequestError &&
      (err.code === "P1001" || err.code === "P1002")
    ) {
      return {
        errors: {
          _form: ["Unable to connect to the database. Please try again later."],
        },
      };
    }

    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    }

    return {
      errors: {
        _form: ["Something went wrong..."],
      },
    };
  }
}
