"use client";
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

const Navbar = () => {
    const path = usePathname();
	return (
		<nav>
			<ul className='flex gap-5'>
				{LINKS &&
					LINKS.map((link) => (
						<Link key={link.name} href={link.href} className='nav-link'>
							{link.name}
						</Link>
					))}
			</ul>
		</nav>
	);
};

export default Navbar;
