"use client";

import React from "react";
import { BlockEntryProps } from "./defs";
import PostLink from "../PostLink/PostLink";

function BlockEntry({
  title,
  description,
  type,
  href,
  date,
  views,
  isThirdParty,
}: BlockEntryProps) {
  return (
    <>
      <PostLink
        href={href}
        title={description || title}
        className="block cursor-pointer rounded-md p-4 text-gray-900 no-underline outline-none transition-all duration-200 ease-out will-change-transform md:hover:bg-[#ffffff13] md:hover:text-text-light"
        underline={false}
        external={isThirdParty}
      >
        <div className="blog-card-inner flex h-full flex-col justify-between gap-0 p-[3.25em]">
          <header className="mb-4">
            <h3 className="text-lg font-bold text-text-light">{title}</h3>
          </header>
          {description && <p className="mb-4 text-text-grey">{description}</p>}
          {(type || date) && (
            <div className="flex flex-none flex-shrink flex-grow-0 items-center">
              {date && (
                <>
                  <span className="line mr-3 h-5 w-[0.18em] bg-background-grey-light" />
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-text-grey">{date}</span>
                    {views && (
                      <span className="text-sm text-text-grey">
                        {views.toLocaleString()}{" "}
                        {views === 1 ? "view" : "views"}
                      </span>
                    )}
                  </div>
                </>
              )}
              {type && (
                <span>/ {type.charAt(0).toUpperCase() + type.slice(1)}</span>
              )}
            </div>
          )}

          {isThirdParty && (
            <span className="text-sm text-gray-500">
              {new URL(href).hostname}{" "}
              <span className="relative top-[-0.03rem] ml-1 text-xs">↗</span>
            </span>
          )}
        </div>
      </PostLink>
    </>
  );
}

export default BlockEntry;
