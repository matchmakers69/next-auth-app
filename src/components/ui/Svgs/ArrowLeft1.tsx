import { SvgComponentProps } from "../types/defs";

export const SvgArrowLeft1Regular = ({
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
    <path d="M16.25 23.25 5.53 12.53a.749.749 0 0 1 0-1.06L16.25.75" />
  </svg>
);
