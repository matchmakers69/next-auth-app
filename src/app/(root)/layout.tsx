import NavbarMain from "@/components/ui/NavbarMain";
import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative h-full w-full pt-28">
      <NavbarMain />
      {children}
    </main>
  );
}
