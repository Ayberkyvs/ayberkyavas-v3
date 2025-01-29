"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
	children: ReactNode;
	delay?: number; // Animation start delay
	duration?: number; // Animation duration
	direction?: "up" | "down" | "left" | "right" | "none"; // Fade-in direction
	distance?: number; // How far the element moves during the animation
	className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
	children,
	delay = 0,
	duration = 0.6,
	direction = "up",
	distance = 30,
	className = "",
}) => {
	const directions: Record<string, { x: number; y: number }> = {
		up: { x: 0, y: distance },
		down: { x: 0, y: -distance },
		left: { x: distance, y: 0 },
		right: { x: -distance, y: 0 },
		none: { x: 0, y: 0 },
	};

	const initialPosition = directions[direction] || directions["none"];

	return (
		<motion.div
			initial={{ opacity: 0, ...initialPosition }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration, delay }}
			viewport={{ once: true, amount: 0.5 }} // Triggers animation when 50% of the element is visible
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
