// components/Layout.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Background({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const maskStyle = `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 200px)`;

  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none radial-grid"
      />

      {/* Mouse Light Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
        animate={{ WebkitMaskImage: maskStyle, maskImage: maskStyle }}
        transition={{ duration: 0.1 }}
      />

      {/* Main Content */}
      <div className="relative z-2">{children}</div>
    </div>
  );
}
