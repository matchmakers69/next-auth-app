"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavLinkProps } from "./defs";
import { cn } from "@/lib/utils";

export const NavLink = ({
  href,
  children,
  className,
  classNameActive,
  ...props
}: NavLinkProps & { classNameActive?: string }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={cn(
        "focus:outline-none focus:ring-1 focus-visible:ring-ring",
        className,
        isActive && classNameActive, // Add active styles if isActive
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
