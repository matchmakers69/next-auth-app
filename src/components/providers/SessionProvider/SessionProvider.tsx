import { SessionProvider as AuthSessionProvider } from "next-auth/react";
import { ProvidersProps } from "./defs";
import { useMemo } from "react";

const SessionProvider = ({ children, session, sessionKey }: ProvidersProps) => {
  const memoizedSessionKey = useMemo(() => {
    if (sessionKey) {
      return sessionKey;
    }
  }, [sessionKey]);
  return (
    <AuthSessionProvider session={session} key={memoizedSessionKey}>
      {children}
    </AuthSessionProvider>
  );
};

export default SessionProvider;
