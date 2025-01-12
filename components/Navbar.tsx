"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LINKS = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About Me",
        href: "/about",
    },
    {
        name: "Works",
        href: "/works",
    },
    {
        name: "Blogs",
        href: "/blogs",
    },
    {
        name: "Links",
        href: "/links",
    },
    {
        name: "Stack",
        href: "/stack",
    },
    {
        name: "Download CV",
        href: "/download-cv",
    },
];

const Navbar = ({direction, className = ''}: {direction: "horizontal" | "vertical", className?: string}) => {
    const path = usePathname();
	return (
		<nav className={`nav ${className}`}>
			<ul className={clsx('flex gap-5', {'flex-col': direction === 'vertical'})}>
				{LINKS &&
					LINKS.map((link) => (
						<Link key={link.name} href={link.href} className={clsx('nav-link', { 'nav-link_active': path === link.href })}>
							{link.name}
						</Link>
					))}
			</ul>
		</nav>
	);
};

export default Navbar;
