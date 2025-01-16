import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedCard = () => {
	return (
		<div className='relative flex flex-col items-center xl:flex-row w-full h-fit bg-background-400 border border-border rounded-lg gap-5 p-[30px] xl:p-[50px] overflow-hidden'>
			<div className="flex flex-col gap-5 w-full xl:max-w-[490px]">
				<div>
					<h6 className='heading-6-bold text-brand'>AYBERK YAVAS - 2024</h6>
					<h3 className='heading-4-bold'>FULL STACK X CLONE</h3>
				</div>
				<hr className='border-2 border-border'/>
				<p className='paragraph'>
					Lorem ipsum dolor sit amet consectetur. Rhoncus platea in scelerisque
					nulla. Tempus posuere tempor porttitor mi tellus quis diam mauris.
					Neque leo tincidunt ante quam sed sit. Viverra pellentesque diam est
					dui adipiscing.
				</p>
				<Link href='#'>
					<Button variant='secondary' size='lg' className='w-fit'>
						Visit Website
					</Button>
				</Link>
			</div>
			<img src='/laptop.png' alt="Laptop" className="flex xl:absolute basis-1/2 w-full h-auto xl:max-w-[557px] xl:h-[376px] -bottom-10 xl:-right-12" />
		</div>
	);
};

export default FeaturedCard;
