"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

import Logout from "@/components/authentication/Logout";
import { Button } from "../../Button";

const HeaderAuth = () => {
  const session = useSession();
  const userName = session.data?.user?.name ?? "Username";
  const avatarSrc = session.data?.user?.image ?? "/icons/avatar.svg";
  let authContent: ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <>
        <p className="mt-2 text-left text-base">{userName}</p>

        <Link href="#">
          <Image
            alt="User avatar"
            src={avatarSrc}
            width="30"
            height="30"
            className="rounded-full"
          />
        </Link>
        <Logout />
      </>
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
