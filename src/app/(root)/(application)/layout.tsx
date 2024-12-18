import NavbarMain from "@/components/ui/NavbarMain";
import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-full w-full pt-28">
      <NavbarMain />
      <div className="container mx-auto flex h-screen flex-col">
        <div className="flex-grow">{children}</div>
      </div>
    </main>
  );
}
