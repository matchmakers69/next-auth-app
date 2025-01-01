import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import Logout from "@/components/authentication/Logout";
import { Button } from "../../Button";
import paths from "@/utils/paths";
import { auth } from "@/auth";

const HeaderAuth = async () => {
  const session = await auth();

  let authContent: ReactNode;

  if (session && session?.user) {
    authContent = (
      <div className="flex items-center gap-6">
        <p className="text-sm">{session?.user?.name ?? "Username"}</p>

        <Link className="block h-[30px] w-[30px]" href={paths.settings()}>
          <Image
            alt="User avatar"
            src={session?.user?.image ?? "/icons/avatar.svg"}
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
