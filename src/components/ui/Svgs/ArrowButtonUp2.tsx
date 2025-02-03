import { SvgComponentProps } from "../types/defs";

export const SvgArrowButtonUp2Bold = ({
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
    <path d="M23.44 19 13.71 2.93a2 2 0 0 0-3.42 0L.56 19a2 2 0 0 0 1.71 3h19.46a2 2 0 0 0 1.71-3Z" />
  </svg>
);
