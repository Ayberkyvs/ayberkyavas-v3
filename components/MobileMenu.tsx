"use client";
import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion";
import { useToggle } from "@/hooks/useToggle";

const MobileMenuContext = React.createContext<any>(null);

const MobileMenu = ({
  children,
  className,
  openTrigger,
  closeTrigger,
}: {
  children: React.ReactNode;
  className: string;
  openTrigger: React.ReactNode;
  closeTrigger: React.ReactNode;
}) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleOpen }}>
      <div className={`${className}`}>
        <MobileMenuTrigger
          openTrigger={openTrigger}
          closeTrigger={closeTrigger}
        />
        {children}
      </div>
    </MobileMenuContext.Provider>
  );
};

const MobileMenuTrigger = ({
  openTrigger,
  closeTrigger,
}: {
  openTrigger: React.ReactNode;
  closeTrigger: React.ReactNode;
}) => {
  const { toggleOpen, isOpen } = React.useContext(MobileMenuContext);

  return (
    <button
      onClick={toggleOpen}
      className="flex items-center justify-center text-center text-foreground"
    >
      {isOpen ? closeTrigger : openTrigger}
    </button>
  );
};

const MobileMenuContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = React.useContext(MobileMenuContext);
  return (
    <motion.div
      className={clsx(
        "fixed left-0 top-[70px] z-[99] h-screen w-screen bg-white/30 shadow-sm dark:bg-black/30 md:top-[90px]",
        {
          "pointer-events-auto": isOpen,
          "pointer-events-none": !isOpen,
        },
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="z-[99] float-right h-full w-[75%] border-l border-border-soft bg-white/70 p-8 shadow-sm dark:bg-black/70"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.1,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export { MobileMenu, MobileMenuContent };
