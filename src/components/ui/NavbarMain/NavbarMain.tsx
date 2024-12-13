import { auth } from "@/auth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import { logout } from "@/actions/auth";

const NavbarMain = async () => {
  const session = await auth();
  return (
    <Nav>
      <div className="flex items-center gap-5 text-black">
        {session && session.user ? (
          <>
            <form
              action={async () => {
                "use server";

                await logout();
              }}
            >
              <button type="submit">
                <span className="max-sm:hidden">Logout</span>
                <LogOut className="size-6 text-red-500 sm:hidden" />
              </button>
            </form>

            <Link href="#">
              <Image alt="avatar" src="/avatar.png" width="40" height="40" />
            </Link>
          </>
        ) : (
          <>hello</>
        )}
      </div>
    </Nav>
  );
};

export default NavbarMain;
