"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./ui/logo";

export const LogoSwitcher = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/"
      title="Website Logo"
      aria-label="Website Logo"
      className="relative flex h-[28px] w-[104px] items-center justify-start"
      scroll
    >
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.div
            key="text-logo"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.1 }}
            className="absolute"
          >
            <Logo
              className="h-[24px] w-[90px] text-text lg:h-[28px] lg:w-[104px]"
              variant="text"
            />
          </motion.div>
        ) : (
          <motion.div
            key="icon-logo"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Logo
              className="size-[24px] text-text lg:size-[30px]"
              variant="icon"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};
