import React from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { PageTitleProps } from "./defs";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="flex w-full flex-col gap-[15px]">
      <h1
        className={`relative text-[2.4rem] font-semibold uppercase leading-[1.2] text-text-light sm:text-lg md:text-[4rem]`}
      >
        {title}
        <span className="absolute bottom-[-5px] left-0 h-[1px] w-[30px] bg-text-light"></span>
      </h1>
      {subtitle && (
        <p
          className={`${IbmPlex.className} md:text-md-xl text-sm font-normal text-text-grey`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
