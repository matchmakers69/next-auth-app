"use server";

import * as auth from "@/auth";
import paths from "@/utils/paths";
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
  await auth.signIn(provider, { redirectTo: paths.home() });
  revalidatePath(paths.home());
};

export const logout = async () => {
  try {
    await auth.signOut({
			redirectTo: paths.login(),
		});
  } catch (error) {
    if ((error as Error).name === "SignOutError") {
      return { error: "Error with signing out!" };
    }
    return { error: "Could not sign out user!" };
  }
};
