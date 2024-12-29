"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "../../Logo";
import { useRef, useState } from "react";
import { HeaderProps } from "./defs";

const Header = ({ children }: HeaderProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYPositionRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYPositionRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYPositionRef.current = y;
    }
  });

  return (
    <motion.header
      transition={{ duration: 0.2 }}
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      className="backdrop-brightness-135 fixed left-0 top-0 z-10 h-[70px] w-[100vw] border-b border-gray-500/60 bg-transparent backdrop-blur-lg backdrop-opacity-75"
    >
      <nav className="relative mx-auto flex h-full w-[calc(100vw-2*1.5vw)] max-w-[2000px] items-stretch justify-between">
        <div className="header-logo relative flex flex-1 items-center justify-start py-[20px]">
          <Link className="logo-link inline-block" href="/">
            <Logo width={120} />
          </Link>
        </div>
        <div className="relative flex flex-1 items-center justify-end gap-[20px] p-[20px]">
          {children}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
