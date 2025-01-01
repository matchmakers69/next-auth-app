import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

export const useCurrentSession = () => {
  const [session, setSession] = useState<Session | null>(null); // Correct type for session state
  const [status, setStatus] = useState<string>("loading");
  const pathName = usePathname();

  const retrieveSession = useCallback(async () => {
    try {
      const sessionData = await getSession();
      if (sessionData) {
        setSession(sessionData); // Set session correctly
        setStatus("authenticated");
      } else {
        setStatus("unauthenticated");
      }
    } catch (error: unknown) {
      console.error(error);
      setStatus("unauthenticated");
      setSession(null);
    }
  }, []);

  useEffect(() => {
    if (!session) {
      retrieveSession(); // Only fetch session if it doesn't exist
    }
  }, [retrieveSession, session, pathName]);

  return { session, status };
};
