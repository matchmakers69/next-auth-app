"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

import Logout from "@/components/authentication/Logout";
import { Button } from "../../Button";
import paths from "@/utils/paths";

const HeaderAuth = () => {
  const session = useSession();
  const user = session.data?.user;
  const userName = session.data?.user?.name ?? "Username";
  const avatarSrc = session.data?.user?.image ?? "/icons/avatar.svg";

  let authContent: ReactNode;
  if (user) {
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
  } else if (!user && session.status !== "loading") {
    authContent = (
      <div className="flex items-center gap-6">
        <Button
          className="button-basic rounded-lg hover:opacity-60"
          asChild
          variant="link"
          size="sm"
        >
          <Link href="/auth/login">Sign in</Link>
        </Button>

        <Button
          className="rounded-lg bg-gradient-to-r from-blue-700 to-indigo-500 hover:opacity-60"
          asChild
          variant="link"
          size="sm"
        >
          <Link href="/auth/register">Sign up</Link>
        </Button>
      </div>
    );
  }
  return authContent;
};

export default HeaderAuth;
