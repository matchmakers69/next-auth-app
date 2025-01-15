"use client";

import { CardWithoutBck } from "@/components/ui/CardWithoutBck";
import FormUpdateUser from "./FormUpdateUser";
import CardTitle from "@/components/ui/Card/CardTitle";
import { useCurrentSession } from "@/hooks/useCurrentSession";

const SettingsContainer = () => {
  const { session, status } = useCurrentSession();
  const user = session?.user;
  return (
    <>
      <CardWithoutBck className="border border-dark-border bg-[hsla(0,0%,100%,0.05)] p-14">
        <CardTitle className="mb-14 text-[2rem]">User profile</CardTitle>
        {!user || status === "loading" ? (
          <p>Please wait for user...</p>
        ) : (
          <>
            <FormUpdateUser user={user} />
          </>
        )}
      </CardWithoutBck>
    </>
  );
};

export default SettingsContainer;
