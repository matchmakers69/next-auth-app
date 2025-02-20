import { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import { Code } from "bright";
import { MDXImage } from "./mdx-image";
import { MDXNote } from "./mdx-note";

Code.theme = {
  dark: "solarized-dark",
  light: "material-palenight",
  lightSelector: '[data-theme="light"]',
};

export const mdxComponents: MDXComponents = {
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    return <Code {...props}>{children}</Code>;
  },
  img: MDXImage as any,
  Image: NextImage as any,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLDetailsElement
  > & {
    summary: string;
  }) => (
    // Necessary due to a hydration error I can't quite figure out
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Note: MDXNote,
  File: File as unknown as React.FC<{ src: string }>,
};
