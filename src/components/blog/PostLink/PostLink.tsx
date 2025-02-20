import clsx from "clsx";
import NextLink from "next/link";
import { PostLinkProps } from "./defs";

const PostLink = ({
  external,
  href,
  children,
  className = "",
  title,
  underline = true,
  tabIndex = 0,
  ...props
}: PostLinkProps) => {
  const baseClasses =
    "transition w-auto h-auto overflow-hidden relative box-border bg-[rgba(217,217,217,0.047)]";
  const underlineClass = underline ? "hover:underline" : "";
  const transitionClass =
    "transition-shadow duration-[1500ms] transition-colors duration-500 backdrop-blur-[var(--blur-bg)] rounded-[1.5625rem] shadow-[2.3rem_1.25rem_5.5rem_rgba(0,0,0,0.2),_0_0_0_2px_rgba(255,255,255,0.06)_inset]";
  const mergedClassName = clsx(
    baseClasses,
    underlineClass,
    transitionClass,
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={mergedClassName}
        title={title}
        tabIndex={tabIndex}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      title={title}
      className={mergedClassName}
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default PostLink;
