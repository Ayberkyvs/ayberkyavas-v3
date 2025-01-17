import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import {
	MobileMenu,
	MobileMenuTrigger,
	MobileMenuContent,
} from "@/components/MobileMenu";
import { MenuIcon, X } from "lucide-react";
const Header = () => {
	return (
		<>
			<header className='header z-[98]'>
				<div className='inner-header'>
					<Image
						src='/logo.svg'
						alt='Logo'
						width={100}
						height={24}
						className='flex lg:hidden'
					/>
					<Image
						src='/logo.svg'
						alt='Logo'
						width={114}
						height={28}
						className='hidden lg:flex'
					/>
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
			</header>
		</>
	);
};

export default Header;
