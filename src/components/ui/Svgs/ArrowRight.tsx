import { SvgComponentProps } from "../types/defs";

export const SvgArrowRightRegular = ({
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
    <path d="M.75 12h22.5M12.75 22.5 23.25 12 12.75 1.5" />
  </svg>
);
