"use client";
import {
  SessionProvider as AuthSessionProvider,
  getSession,
} from "next-auth/react";
import { Session } from "next-auth";
import { ReactNode, useCallback, useEffect, useState } from "react";

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const fetchSession = useCallback(async () => {
    const session = await getSession();
    setSession(session);
  }, []);

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);
  return (
    <AuthSessionProvider session={session}>{children}</AuthSessionProvider>
  );
};

export default SessionProvider;
