import NavbarMain from "@/components/ui/NavbarMain";
import { ReactNode } from "react";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavbarMain />
      {children}
    </main>
  );
}
