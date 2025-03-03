"use client";

import { ReactNode } from "react";
import Logout from "@/components/authentication/Logout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../Button";
import paths from "@/utils/paths";
import { useCurrentSession } from "@/hooks/useCurrentSession";

const HeaderAuth = () => {
  const { session } = useCurrentSession();
  let authContent: ReactNode;

  if (session && session?.user) {
    const userName = session?.user.name ?? "Username";
    const avatarSrc = session?.user.image ?? "/icons/avatar.svg";

    authContent = (
      <div className="flex items-center gap-6">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {userName}
        </p>

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
          className="hover:bg-dark-blue rounded-lg bg-text-light text-black hover:text-black"
          asChild
          variant="link"
          size="sm"
        >
          <Link href={paths.login()}>Sign in</Link>
        </Button>

        <Button
          className="bg-dark-blue rounded-lg text-black hover:bg-text-light hover:text-black"
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
