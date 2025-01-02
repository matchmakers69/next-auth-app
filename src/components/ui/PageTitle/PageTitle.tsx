import React from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { PageTitleProps } from "./defs";
import { cn } from "@/libs/utils";
import StarsIcon from "../StarsIcon";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

const PageTitle = ({ title, subtitle, slogan, className }: PageTitleProps) => {
  return (
    <header className={cn("flex w-full flex-col", className)}>
      <div className={`${slogan || subtitle ? "mb-2" : "mb-0"} flex gap-2`}>
        <StarsIcon />
        <h1
          className={`${IbmPlex.className} text-[1.8rem] font-semibold uppercase text-text-grey sm:text-[2rem]`}
        >
          {title}
        </h1>
      </div>
      {slogan && (
        <p className="text-[2.4rem] font-semibold leading-[1.2] text-text-light sm:text-lg md:text-[4rem]">
          {slogan}
        </p>
      )}
      {subtitle && (
        <p
          className={`${IbmPlex.className} md:text-md-xl text-sm font-normal text-text-grey`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageTitle;
