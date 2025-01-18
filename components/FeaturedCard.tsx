import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface FeaturedCardData {
	forWho: string;
	createdAt: Date;
	title: string;
	description: string;
	callToActions?: {label: string; link: string}[];
	image: string;
}
const FeaturedCard = ({data}: {data: FeaturedCardData}) => {
	return (
		<div className='relative flex flex-col items-center xl:flex-row w-full h-fit bg-background-400 border border-border rounded-lg gap-5 p-[30px] xl:p-[50px] overflow-hidden'>
			<div className='flex flex-col gap-5 w-full xl:max-w-[490px]'>
				<div>
					<h6 className='heading-6-bold text-brand uppercase'>{data.forWho} - {data.createdAt.getFullYear()}</h6>
					<h3 className='heading-4-bold uppercase'>{data.title}</h3>
				</div>
				<hr className='border border-border' />
				<p className='paragraph'>
					{data.description}
				</p>
				{data?.callToActions && data.callToActions.length > 0 && data.callToActions.map((cta, index: number)=> (
					<Link href={cta.link} key={cta.link + index}>
						<Button variant='secondary' size='sm' className='w-fit'>
							{cta.label}
						</Button>
					</Link>
				))}
			</div>
			<Image
				src={data?.image || "/laptop.png"}
				alt='Laptop'
				width={557}
				height={376}
				className='flex xl:absolute basis-1/2 w-full h-auto xl:max-w-[557px] xl:h-[376px] -bottom-10 xl:-right-12'
			/>
		</div>
	);
};

export default FeaturedCard;
