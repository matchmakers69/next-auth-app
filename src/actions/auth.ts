"use server";

import * as auth from "@/auth";
import paths from "@/utils/paths";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
  await auth.signIn(provider, { redirectTo: paths.home() });
  revalidatePath(paths.home());
};

export const logout = async () => {
  try {
    await auth.signOut({ redirectTo: paths.login() });
  revalidatePath(paths.login());
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
