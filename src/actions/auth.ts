"use server";

import * as auth from "@/auth";
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
  await auth.signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logout = async () => {
  await auth.signOut({ redirectTo: "/" });
  revalidatePath("/");
};
