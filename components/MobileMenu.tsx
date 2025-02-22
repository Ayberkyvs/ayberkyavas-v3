"use client";
import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion";

const MobileMenuContext = React.createContext<any>(null);

const MobileMenu = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleMenu }}>
      <div className={`${className}`}>{children}</div>
    </MobileMenuContext.Provider>
  );
};

const MobileMenuTrigger = ({ children }: { children: React.ReactNode[] }) => {
  const { toggleMenu, isOpen } = React.useContext(MobileMenuContext);

  return (
    <button
      onClick={toggleMenu}
      className="flex items-center justify-center text-center text-white"
    >
      {isOpen ? children[1] : children[0]}
    </button>
  );
};

const MobileMenuContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = React.useContext(MobileMenuContext);
  return (
    <motion.div
      className={clsx("absolute left-0 top-14 w-full bg-black/90 p-5", {
        "pointer-events-auto": isOpen,
        "pointer-events-none": !isOpen,
      })}
      initial={{ y: "-150%", opacity: 0 }}
      animate={{ y: isOpen ? 1 : "-150%", opacity: isOpen ? 1 : 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export { MobileMenu, MobileMenuTrigger, MobileMenuContent };
