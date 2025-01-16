"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
const LINKS = [
    {
        name: "Home",
        href: "/",
        btnType: 'link',
    },
    {
        name: "About Me",
        href: "/about",
        btnType: 'link',
    },
    {
        name: "Works",
        href: "/works",
        btnType: 'link',
    },
    {
        name: "Blogs",
        href: "/blogs",
        btnType: 'link',
    },
    {
        name: "Links",
        href: "/links",
        btnType: 'link',
    },
    {
        name: "Stack",
        href: "/stack",
        btnType: 'link',
    },
    {
        name: "Download CV",
        href: "/Frontend_Developer_Ayberk_Yavas_CV.pdf",
        btnType: 'secondary',
    },
];

const Navbar = ({direction, className = ''}: {direction: "horizontal" | "vertical", className?: string}) => {
    const path = usePathname();
	return (
		<nav className={`nav ${className}`}>
			<ul className={clsx('flex gap-5', {'flex-col': direction === 'vertical'})}>
				{LINKS &&
					LINKS.map((link) => (
						<Link key={link.name} href={link.href}>
							<Button variant={link.btnType as 'link' | 'secondary'} size='lg' className={clsx('nav-link p-0 px-2 py-4 text-white', {'text-black': link.btnType === 'secondary', 'nav-link_active': path === link.href })}>
                               {link.name} {link.btnType === 'secondary' && <Download />}
                            </Button>
						</Link>
					))}
			</ul>
		</nav>
	);
};

export default Navbar;
