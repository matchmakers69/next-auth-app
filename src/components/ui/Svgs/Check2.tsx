import { SvgComponentProps } from "../types/defs";

export const SvgCheck2Bold = ({ title, ...props }: SvgComponentProps) => (
  <svg
    height={24}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M22.45 0H1.55A1.54 1.54 0 0 0 0 1.54v20.91A1.54 1.54 0 0 0 1.55 24h20.9A1.54 1.54 0 0 0 24 22.45V1.54A1.54 1.54 0 0 0 22.45 0Zm-3.64 7.84-7 9.5a1 1 0 0 1-1.43.19l-5-4A1 1 0 1 1 6.62 12l4.19 3.35 6.38-8.66a1 1 0 1 1 1.62 1.18Z" />
  </svg>
);
