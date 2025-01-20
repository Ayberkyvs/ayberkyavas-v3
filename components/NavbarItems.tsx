"use client";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import clsx from "clsx";
const NavbarItems = () => {
	const LINKS = [
		{
			name: "Home",
			href: "/",
			btnType: "link",
		},
		{
			name: "About me",
			href: "/about",
			btnType: "link",
		},
		{
			name: "Projects",
			href: "/projects",
			btnType: "link",
		},
		{
			name: "Blogs",
			href: "/blogs",
			btnType: "link",
		},
	];

	const path = usePathname();
	return (
		<>
			{LINKS &&
				LINKS.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>
							<Button
								variant={link.btnType as "link"}
								size='lg'
								className={clsx("nav-link p-0 px-2 py-4 text-white", {
									"nav-link_active": path === link.href,
								})}
							>
								{link.name}
							</Button>
						</Link>
					</li>
				))}
		</>
	);
};

export default NavbarItems;
