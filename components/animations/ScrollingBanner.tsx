"use client";

import React, { ReactNode, useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useSpring,
} from "framer-motion";

interface ScrollingBannerProps {
	children: ReactNode;
	speed?: number;
}

export const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
	children,
	speed = 0.5,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(containerRef, { once: false, amount: 0.5 });

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const x = useSpring(
		useTransform(scrollYProgress, [0, 1], ["0%", `${-1200 * speed}%`]),
		{
			stiffness: 100,
			damping: 30,
			restDelta: 0.001,
		}
	);

	return (
		<div ref={containerRef} className="overflow-hidden">
			<motion.div
				style={{ x }}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 1 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				className="flex whitespace-nowrap"
			>
				{children}
				{children} {/* Duplicate children to create a seamless loop */}
			</motion.div>
		</div>
	);
};
