"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollStackProps {
  children: ReactNode;
  offset?: number; // Offset between stacked children
  animationDelay?: number; // Delay between each child's animation
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  offset = -20,
  animationDelay = 0.2,
}) => {
  const stackVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: i * offset,
      opacity: 1,
      transition: { duration: 0.6, delay: i * animationDelay },
    }),
  };

  return (
    <div className="relative flex flex-col gap-[30px]">
      {React.Children.map(children, (child, index) => (
        <motion.div
          custom={index} // Pass index to control stagger
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={stackVariants}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollStack;
