"use client";
import clsx from "clsx";
// components/MobileMenu.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

// Ana Bileşen: MobileMenu
const MobileMenuContext = React.createContext<any>(null);

const MobileMenu = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<MobileMenuContext.Provider value={{ isOpen, toggleMenu }}>
			<div className={`${className}`}>{children}</div>
		</MobileMenuContext.Provider>
	);
};

// Tetikleyici Bileşeni: MobileMenuTrigger
const MobileMenuTrigger = ({ children }: { children: React.ReactNode[] }) => {
	const { toggleMenu, isOpen } = React.useContext(MobileMenuContext);

	return (
		<button
			onClick={toggleMenu}
			className='flex items-center justify-center text-center text-white'
		>
			{isOpen ? children[1] : children[0]}
		</button>
	);
};

// Menü İçeriği Bileşeni: MobileMenuContent
const MobileMenuContent = ({ children }: { children: React.ReactNode }) => {
	const { isOpen } = React.useContext(MobileMenuContext);
	return (
		<motion.div
			className={clsx("bg-black/90 absolute top-14 left-0 w-full p-5", {
				"pointer-events-auto": isOpen,
				"pointer-events-none": !isOpen,
			})}
			initial={{ y: "-150%", opacity: 0 }}
			animate={{ y: isOpen ? 1 : "-150%", opacity: isOpen ? 1 : 0 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 30,
				duration: 0.3,
			}}
		>
            {children}
		</motion.div>
	);
};

// Bileşenlerin İhracı
export { MobileMenu, MobileMenuTrigger, MobileMenuContent };
