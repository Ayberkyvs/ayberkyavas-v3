"use client"

import { motion, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation';

const ScrollIndicator: React.FC = () => {
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  if (!(path.startsWith('/blogs/') || path === '/about')) return null;
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollIndicator

