"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* Grid Background */}
      <div className="radial-grid pointer-events-none fixed inset-0" />

      {/* Mouse Light Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 200px)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 200px)`,
        }}
        animate={{
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 200px)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 100px, black 200px)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
