import Logo from "./ui/logo";
import FooterSocials from "./FooterSocials";
import Parallax from "./animations/Parallax";
import Link from "next/link";

const Footer = () => {
    // Delete mt-[100px] if you dont't have Parallax Component
	return (
		<Parallax>
			<footer className='w-full bg-background py-[50px] border-t border-border z-[99] mt-[100px]'>
				<div className='flex flex-col layout-prefix gap-5'>
					<Link href='/' scroll={true}>
						<Logo className='w-[140px] h-[33px] sm:w-[180px] sm:h-[43px] text-white' variant="text"/>
					</Link>
					<hr className='border-border' />
					<div className='flex justify-between gap-5 flex-wrap'>
						<FooterSocials className='!text-text small sm:paragraph' />
						<p className='small sm:paragraph !text-text'>
							©{new Date().getFullYear()} COPYRIGHT AYBERK YAVAS. ALL RIGHTS
							RESERVED.
						</p>
					</div>
				</div>
			</footer>
		</Parallax>
	);
};

export default Footer;
