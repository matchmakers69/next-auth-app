"use client";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "../../Logo";
import { NavProps } from "./defs";
import { useRef, useState } from "react";

const Nav = ({ children }: NavProps) => {
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
      className="fixed left-0 top-0 z-10 flex w-full justify-center"
    >
      <nav className="sticky top-0 flex w-full items-center justify-between">
        <Link href="/">
          <Logo width={45} height={45} />
        </Link>
        {children}
      </nav>
    </motion.header>
  );
};

export default Nav;
