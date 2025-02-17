import { auth } from "@/auth";

export const useCurrentSessionServer = async () => {
  const session = await auth();
  return session;
};
