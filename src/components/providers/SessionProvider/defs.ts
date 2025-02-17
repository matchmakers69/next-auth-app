import { Session } from "next-auth";

export interface ProvidersProps {
    children: React.ReactNode;
    session?: Session | null;
    sessionKey?: number;
  }