import { SvgComponentProps } from "../types/defs";

export const SvgArrowLeftRegular = ({ title, ...props }: SvgComponentProps) => (
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
    <path d="M23.25 12H.75M11.25 1.5.75 12l10.5 10.5" />
  </svg>
);
