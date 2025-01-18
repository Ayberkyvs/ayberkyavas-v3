"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Background({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const maskStyle = `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 200px)`;

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none radial-grid" />

      {/* Mouse Light Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
        animate={{ WebkitMaskImage: maskStyle, maskImage: maskStyle }}
        transition={{ duration: 0.1 }}
      />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}

