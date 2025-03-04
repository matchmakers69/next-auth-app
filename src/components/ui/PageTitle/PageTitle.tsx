import React from "react";
import { PageTitleProps } from "./defs";
import { cn } from "@/libs/utils";
import StarsIcon from "../StarsIcon";

const PageTitle = ({ title, subtitle, slogan, className }: PageTitleProps) => {
  return (
    <header className={cn("flex w-full flex-col", className)}>
      <div
        className={`${slogan || subtitle ? "mb-4" : "mb-0"} flex items-center gap-2`}
      >
        <StarsIcon />
        <h1 className="text-[2rem] text-dark-blue sm:text-[2.4rem]">{title}</h1>
      </div>
      {slogan && (
        <p className="font-oswald text-[2.4rem] font-bold leading-[1.2] text-text-light sm:text-lg md:text-[4rem]">
          {slogan}
        </p>
      )}
      {subtitle && (
        <p className="md:text-md-xl text-sm font-normal text-text-grey">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageTitle;
