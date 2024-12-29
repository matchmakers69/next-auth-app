import { type LinkProps } from "next/link";
import { type ReactNode } from "react";

export type NavLinkProps = LinkProps & { children: ReactNode; className?: string };
