import { SvgComponentProps } from "../types/defs";

export const SvgArrowButtonDown2Bold = ({
  title,
  ...props
}: SvgComponentProps) => (
  <svg
    height={24}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M23.47 3a2 2 0 0 0-1.74-1H2.27A2 2 0 0 0 .56 5l9.73 16.07a2 2 0 0 0 3.42 0L23.44 5a2 2 0 0 0 .03-2Z" />
  </svg>
);
