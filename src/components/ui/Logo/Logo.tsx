import Image from "next/image";
import { type LogoProps } from "./defs";

export const Logo = ({ width = 50, height = 50 }: LogoProps) => {
  return (
    <span className="relative block">
      <Image
        src="/icons/logo.svg"
        alt="logo"
        className="cursor-pointer"
        quality={100}
        width={width}
        height={height} // Provide height here
        sizes={`(max-width: ${width}px) 100vw, ${width}px`} // Adjust sizes dynamically
        style={{
          objectFit: "contain",
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </span>
  );
};
