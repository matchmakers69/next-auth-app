import { SvgComponentProps } from "../types/defs";

export const SvgArrowDown1Regular = ({
  title,
  ...props
}: SvgComponentProps) => (
  <svg
    fill="none"
    height={24}
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M23.25 7.311 12.53 18.03a.749.749 0 0 1-1.06 0L.75 7.311" />
  </svg>
);
