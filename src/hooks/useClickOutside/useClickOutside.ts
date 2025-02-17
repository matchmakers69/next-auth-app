/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { useEffect, useRef } from "react";
import { type UseClickOutsideConfig } from "./defs";

const assertIsNode = (target: EventTarget | Node | null): target is Node =>
  !!target && "nodeType" in target;

export const useClickOutside = <T extends HTMLElement>({
  onOutside,
}: UseClickOutsideConfig) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      (assertIsNode(target) && ref.current?.contains(target)) || onOutside();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref };
};
