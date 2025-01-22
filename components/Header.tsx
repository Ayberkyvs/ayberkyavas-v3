import React from "react";
import Navbar from "@/components/Navbar";
import {
	MobileMenu,
	MobileMenuTrigger,
	MobileMenuContent,
} from "@/components/MobileMenu";
import { MenuIcon, Ribbon, X } from "lucide-react";
import ScrollIndicator from './ScrollIndicator';
import Logo from "./ui/logo";
import Link from "next/link";

const Header = () => {
	return (
		<>
			<header className='header z-[98]'>
				<div className='inner-header'>
					<Link href='/' title="Website Logo" aria-label="Website Logo" className="flex gap-2">
						<Logo className="w-[100px] h-[24px] lg:w-[114px] lg:h-[28px] text-text" variant="text" />
						<Ribbon className="text-text h-[24px] lg:h-[28px] w-auto" />
					</Link>
					<Navbar direction='horizontal' className='hidden md:block' />
					<MobileMenu className='md:hidden'>
						<MobileMenuTrigger>
							<MenuIcon />
							<X />
						</MobileMenuTrigger>
						<MobileMenuContent>
							<Navbar direction='vertical' className='bg-transparent' />
						</MobileMenuContent>
					</MobileMenu>
				</div>
				<ScrollIndicator />
			</header>
		</>
	);
};

export default Header;
