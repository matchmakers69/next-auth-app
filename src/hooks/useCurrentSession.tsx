import { useSession } from "next-auth/react";

export const useCurrentSession = () => {
  const { data: session, status, update } = useSession();

  return { session, status, update };
};
