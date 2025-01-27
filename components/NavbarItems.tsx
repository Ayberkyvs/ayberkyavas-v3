"use client";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import clsx from "clsx";
import Ping from "./ui/ping";
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
		{
			name: "Monitor",
			href: "https://stats.uptimerobot.com/aneVByWNsv",
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
									"relative": link.name === "Monitor",
								})}
							>
								{link.name} {link.name === "Monitor" && <Ping isAvailable colors={{
									success: "bg-green-500",
									error: "bg-red-500",
								}}
								className="absolute top-[9px] right-0 z-[-1]" />}
							</Button>
						</Link>
					</li>
				))}
		</>
	);
};

export default NavbarItems;
