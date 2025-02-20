import NextLink from "next/link";

type LinkProps = React.ComponentProps<typeof NextLink>;

export type PostLinkProps = {
  external?: boolean;
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  tabIndex?: number;
} & LinkProps;
