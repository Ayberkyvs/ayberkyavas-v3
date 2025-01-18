'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxScrollProps {
  children: ReactNode
  direction?: 'up' | 'down'
  speed?: number,
  className?: string;
}

export default function Parallax({
  children,
  direction = 'up',
  speed = 0.5,
  className
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? ['0%', `${-100 * speed}%`] : [`${-100 * speed}%`, '0%']
  )

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}

