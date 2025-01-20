import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
const FeaturedCard = ({data}:{ data: Project }) => {
	const {forWho, createdAt, title, description, callToActions, imageSrc} = data;
	return (
		<div className='relative flex flex-col items-center xl:flex-row w-full h-fit min-h-[400px] bg-background-400 border border-border rounded-lg gap-5 p-[30px] xl:p-[50px] overflow-hidden'>
			<div className='flex flex-col gap-5 w-full xl:max-w-[490px]'>
				<div>
					<h6 className='heading-6-bold text-brand uppercase'>{forWho} - {new Date(createdAt).getFullYear()}</h6>
					<h3 className='heading-4-bold uppercase'>{title}</h3>
				</div>
				<hr className='border border-border' />
				<p className='paragraph'>
					{description}
				</p>
				<div className="flex gap-2">
				{callToActions && callToActions.length > 0 && callToActions.map((cta)=> (
					<Link href={cta.link || '#'} key={cta._key}>
						<Button variant='secondary' size='sm' className='w-fit'>
							{cta.label}
						</Button>
					</Link>
				))}
				</div>
			</div>
			<Image
				src={urlFor(imageSrc).width(557).url()}
				alt='Laptop'
				width={557}
				height={376}
				className='flex xl:absolute basis-1/2 w-full h-auto xl:max-w-[557px] xl:h-[376px] -bottom-10 xl:-right-12'
			/>
		</div>
	);
};

export default FeaturedCard;
