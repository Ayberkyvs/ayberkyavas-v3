"use client";
import React from 'react'
import { motion } from 'framer-motion';

const InfiniteScrollHorizontal = () => {
    const brands = [
        {
          name: "Meta",
          logo: "/brands/meta-logo.svg",
        },
        {
          name: "MongoDB",
          logo: "/brands/mongodb-logo.svg",
        },
        {
          name: "Scrimba",
          logo: "/brands/scrimba-logo.svg",
        },
        {
          name: "FreeCodeCamp",
          logo: "/brands/freecodecamp-logo.svg",
        },
        {
          name: "Turkcell",
          logo: "/brands/turkcell-logo.svg",
        },
      ];
  return (
    <motion.div
      className="w-full flex items-center justify-start gap-[200px] border-2 overflow-x-hidden"
      initial={{ x: '100%' }}
      animate={{ x: "-100%" }}
      transition={{
        duration: 30, // Animation duration
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...brands, ...brands].map((brand, index) => (
        <div key={index} className="flex justify-center items-center w-fit gap-2 border-2">
            <img src={brand.logo} alt={`${brand.name} logo svg`} width={60} height={60} />
            <p className="heading-6">{brand.name}</p>
        </div>
      ))}
    </motion.div>
  )
}

export default InfiniteScrollHorizontal