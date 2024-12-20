import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import avatar from "../../../../public/icons/avatar.png";
import Logout from "@/components/authentication/Logout";
import { Button } from "../Button";

const NavbarMain = async () => {
  const session = await auth();
  const userName = session?.user?.name ?? "";
  const avatarSrc = session?.user?.image ?? avatar;

  return (
    <Nav>
      {session && session.user ? (
        <>
          <p className="mt-2 text-left text-base">{userName}</p>

          <Link href="#">
            <Image
              alt="User avatar"
              src={avatarSrc}
              width="40"
              height="40"
              className="rounded-full"
            />
          </Link>
          <Logout />
        </>
      ) : (
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
      )}
    </Nav>
  );
};

export default NavbarMain;
