"use client";

import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const ScrollIndicator: React.FC = () => {
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  if (!(path.startsWith("/blogs/") || path === "/about")) return null;
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-brand"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollIndicator;
