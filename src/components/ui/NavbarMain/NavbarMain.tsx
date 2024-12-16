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
            <Image alt="User avatar" src={avatarSrc} width="40" height="40" />
          </Link>
          <Logout />
        </>
      ) : (
        <Button
          className="rounded-lg border-[1px] border-solid uppercase hover:bg-white hover:text-navy"
          asChild
          variant="link"
          size="sm"
        >
          <Link href="/auth/login">Login</Link>
        </Button>
      )}
    </Nav>
  );
};

export default NavbarMain;
