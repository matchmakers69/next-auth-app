"use server";

import * as auth from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
  await auth.signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logout = async () => {
  try {
    await auth.signOut({ redirectTo: "/auth/login" });
  revalidatePath("/auth/login");
  } catch (error) {
    if (error instanceof AuthError) {
			switch (error.type) {
				case "SignOutError":
					return { error: "Error with signing out!" };
				default:
					return {
						error: "Could not sign out user!",
					};
			}
		}
		throw error;
  }
};
