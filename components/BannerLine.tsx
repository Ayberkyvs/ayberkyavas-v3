import React from "react";
import { ScrollingBanner } from "@/components/animations/ScrollingBanner";
import Logo from "@/components/ui/logo";

const BannerLine = () => {
    const slogans = [
		"GOOD QUALITY",
		"USER FRIENDLY",
		"FRONTEND SERVICE",
		"ACCESSIBLE",
		"INTERACTIVE",
		"RESPONSIVE",
		"MAINTAINABLE",
	];
	return (
		<div className='flex-center w-screen h-[60px] md:h-[70px] bg-gradient-to-r from-blue-300 to-[var(--brand)] -rotate-3 -ml-2'>
			<ScrollingBanner speed={0.5}>
				{slogans.map((slogan, index: number) => (
					<div
						className='flex-[0_0_55%] xs:flex-[0_0_45%] sm:flex-[0_0_35%] md:flex-[0_0_25%] lg:flex-[0_0_20%] 2xl:flex-[0_0_15%] flex-center w-fit gap-3'
						key={index}
					>
						<Logo
							className='w-[29px] h-[20px] lg:w-[39px] lg:h-[30px] text-black'
							variant='icon'
						/>
						<h6 className='text-base xs:text-lg lg:heading-6-bold font-bold !text-black truncate'>
							{slogan}
						</h6>
					</div>
				))}
			</ScrollingBanner>
		</div>
	);
};

export default BannerLine;
