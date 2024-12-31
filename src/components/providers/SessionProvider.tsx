import { auth } from "@/auth";
import { SessionProvider as AuthSessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const SessionProvider = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <AuthSessionProvider session={session}>{children}</AuthSessionProvider>
  );
};

export default SessionProvider;
