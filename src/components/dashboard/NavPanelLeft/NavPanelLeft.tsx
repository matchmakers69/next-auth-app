import { auth } from "@/auth";
import Logout from "@/components/authentication/Logout";
import { Logo } from "@/components/ui/Logo";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import SidebarLeftContainer from "./SidebarLeftContainer";
import LogoSidebarContainer from "./LogoSidebarContainer";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

const NavPanelLeft = async () => {
  const session = await auth();
  const userName = session?.user?.name ?? "Username";
  const email = session?.user.email ?? "";

  return (
    <SidebarLeftContainer>
      <nav className="bg-platinum flex h-full min-h-0 flex-col">
        <div className="border-dark-border flex flex-col border-b p-6 [&>[data-slot=section]+[data-slot=section]]:mt-2.5">
          <div className="flex flex-col justify-center">
            <LogoSidebarContainer>
              <Link className="logo-link inline-block" href="/">
                <Logo width={115} />
              </Link>
            </LogoSidebarContainer>
          </div>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto p-6 [&>[data-slot=section]+[data-slot=section]]:mt-8">
          <div className="flex-scroll-mb-5 mb-8 flex w-full">
            <p
              className={`${IbmPlex.className} text-base font-normal uppercase text-text-grey`}
            >
              Menu
            </p>
          </div>
          <div className="flex flex-col gap-0.5" data-slot="section">
            Link here
          </div>
        </div>
        <footer className="border-dark-border flex flex-col border-t p-6 [&>[data-slot=section]+[data-slot=section]]:mt-2.5">
          {session && session.user && (
            <>
              <div className="username-wrapper mb-4 flex w-full select-none flex-col flex-wrap gap-[5px]">
                <label
                  className={`${IbmPlex.className} text-base font-normal uppercase text-text-grey`}
                >
                  Signed as
                </label>
                <div className="flex w-full flex-col flex-wrap gap-[3px]">
                  <p className="w-full overflow-hidden text-ellipsis text-left text-sm text-text-light">
                    {userName}
                  </p>
                  <p className="w-full overflow-hidden text-ellipsis text-left text-sm font-semibold text-text-light">
                    {email}
                  </p>
                </div>
              </div>
              <div className="flex items-center py-4">
                <Logout />
              </div>
            </>
          )}
        </footer>
      </nav>
    </SidebarLeftContainer>
  );
};

export default NavPanelLeft;
