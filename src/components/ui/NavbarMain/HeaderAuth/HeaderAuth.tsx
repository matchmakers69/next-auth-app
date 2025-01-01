"use client";

import { ReactNode } from "react";
import Logout from "@/components/authentication/Logout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../Button";
import paths from "@/utils/paths";

import { useCurrentSession } from "@/hooks/useCurrentSession";

const HeaderAuth = () => {
  const { session, status } = useCurrentSession();

  let authContent: ReactNode;

  if (status === "loading") {
    authContent = <div>Loading...</div>;
  } else if (session && session?.user) {
    const userName = session?.user.name ?? "Username";
    const avatarSrc = session?.user.image ?? "/icons/avatar.svg";

    authContent = (
      <div className="flex items-center gap-6">
        <p className="text-sm">{userName}</p>

        <Link className="block h-[30px] w-[30px]" href={paths.settings()}>
          <Image
            alt="User avatar"
            src={avatarSrc}
            width="30"
            height="30"
            className="rounded-full"
          />
        </Link>
        <Logout />
      </div>
    );
  } else {
    authContent = (
      <div className="flex items-center gap-6">
        <Button
          className="button-basic rounded-lg hover:opacity-60"
          asChild
          variant="link"
          size="sm"
        >
          <Link href={paths.login()}>Sign in</Link>
        </Button>

        <Button
          className="rounded-lg bg-gradient-to-r from-blue-700 to-indigo-500 hover:opacity-60"
          asChild
          variant="link"
          size="sm"
        >
          <Link href={paths.register()}>Sign up</Link>
        </Button>
      </div>
    );
  }

  return authContent;
};

export default HeaderAuth;
