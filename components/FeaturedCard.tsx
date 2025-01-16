import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedCard = () => {
	return (
		<div className='relative flex flex-wrap w-full min-h-[453px] h-fit bg-background-400 border-border border rounded-lg gap-[30px] xl:gap-[100px] items-center p-[50px]'>
			<div className='flex flex-col gap-5 w-full xl:max-w-[490px]'>
				<div>
					<h6 className='heading-6-bold text-brand'>AYBERK YAVAS - 2024</h6>
					<h3 className='heading-3-bold'>FULL STACK X CLONE</h3>
				</div>
				<hr className='border-2 border-border ' />
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
			<div className="flex basis-1/2 absolute bottom-0 right-0">
				<img
					src='/laptop.png'
			 		alt='Full Stack X Clone'
					className='aspect-16/9'
					draggable={false}
				/>
			</div>
		</div>
	);
};

export default FeaturedCard;
