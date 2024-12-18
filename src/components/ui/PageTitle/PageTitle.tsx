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
        className={`text-[2rem] font-extrabold leading-[1.2] text-text-light sm:text-lg md:text-[4rem]`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`${IbmPlex.className} md:text-md-xl text-text-grey text-sm font-normal`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
