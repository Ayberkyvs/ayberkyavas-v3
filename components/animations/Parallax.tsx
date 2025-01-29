"use client";

import { ReactNode, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxScrollProps {
	children: ReactNode;
	direction?: "up" | "down";
	speed?: number;
	className?: string;
}

export default function Parallax({
	children,
	direction = "up",
	speed = 0.5,
	className,
}: ParallaxScrollProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(
		scrollYProgress,
		[0, 1],
		direction === "up" ? ["0%", `${-100 * speed}%`] : [`${-100 * speed}%`, "0%"]
	);

	const mainScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

	useEffect(() => {
		const main = document.querySelector("main");
		if (main) {
			const unsubscribe = mainScale.on("change", (scale) => {
				main.style.transform = `scale(${scale})`;
			});
			return () => unsubscribe();
		}
	}, [mainScale]);

	return (
		<motion.div
			ref={ref}
			style={{ y }}
			className={`relative w-full overflow-hidden ${className}`}
		>
			{children}
		</motion.div>
	);
}
