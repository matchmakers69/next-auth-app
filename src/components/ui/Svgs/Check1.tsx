import { SvgComponentProps } from "../types/defs";

export const SvgCheck1Bold = ({ title, ...props }: SvgComponentProps) => (
  <svg
    fill="#000"
    height={24}
    strokeWidth={1}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M23.37 0.29a1.49 1.49 0 0 0 -2.09 0.34L7.25 20.2l-4.69 -4.69a1.5 1.5 0 0 0 -2.12 2.12l5.93 5.94a1.53 1.53 0 0 0 2.28 -0.19l15.07 -21a1.49 1.49 0 0 0 -0.35 -2.09Z" />
  </svg>
);
