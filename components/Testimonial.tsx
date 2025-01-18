import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

interface TestimonialData {
	avatar: string;
	name: string;
	role: string;
	comment: string;
}
const Testimonial = ({data}: {data: TestimonialData}) => {
	return (
		<Card className='bg-background-400 border border-border'>
			<CardHeader className='flex flex-row gap-5'>
				<Image
					src={data.avatar}
					alt='Testimonials Avatar'
					width={60}
					height={60}
					className='rounded-lg flex-shrink-1'
				/>
				<div>
					<h4 className='font-semibold heading-6-bold'>{data.name}</h4>
					<p className='small text-neutral-300 line-clamp-1'>{data.role}</p>
				</div>
			</CardHeader>
			<CardContent>
				<p className='paragraph'>
					{data.comment}
				</p>
			</CardContent>
		</Card>
	);
};

export default Testimonial;
