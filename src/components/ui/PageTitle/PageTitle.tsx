import React from "react";
import { PageTitleProps } from "./defs";

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1
      className={`text-[2rem] sm:text-lg md:text-[4rem] mb-10 font-extrabold text-text-light uppercase leading-[1.2]`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
