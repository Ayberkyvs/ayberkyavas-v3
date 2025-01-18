"use client"

import { motion, useScroll } from 'framer-motion'

const ScrollIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollIndicator

