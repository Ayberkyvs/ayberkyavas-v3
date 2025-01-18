import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import {
	MobileMenu,
	MobileMenuTrigger,
	MobileMenuContent,
} from "@/components/MobileMenu";
import { MenuIcon, X } from "lucide-react";
import ScrollIndicator from './ScrollIndicator';
import Logo from "./ui/logo";
import Link from "next/link";

const Header = ({scrollIndicator}: {scrollIndicator: boolean}) => {
	return (
		<>
			<header className='header z-[98]'>
				<div className='inner-header'>
					<Link href='/'>
						<Logo className="w-[100px] h-[24px] lg:w-[114px] lg:h-[28px] text-white" variant="text" />
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
				{scrollIndicator && <ScrollIndicator />}
			</header>
		</>
	);
};

export default Header;
