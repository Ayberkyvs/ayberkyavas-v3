import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Socials from "@/components/Socials";
import type { Testimonial } from "@/types/home";

type TestimonialProps = {
	data: Testimonial;
};
const Testimonial = ({ data }: TestimonialProps) => {
	const { avatar, name, role, comment, links } = data;
	return (
		<Card className="bg-background-400 border border-border">
			<CardHeader className="flex flex-row gap-5">
				<Image
					src={avatar}
					alt="Testimonials Avatar"
					width={60}
					height={60}
					className="rounded-lg size-[60px] object-cover"
				/>
				<div>
					<h4 className="font-semibold heading-6-bold">{name}</h4>
					<p className="small text-neutral-300 line-clamp-1">{role}</p>
				</div>
			</CardHeader>
			<CardContent className="min-h-[150px] h-fit">
				<p className="paragraph">{comment}</p>
			</CardContent>
			{links && links.length > 0 && (
				<CardFooter>
					<Socials className="text-blue-300 text-xs" socials={links} />
				</CardFooter>
			)}
		</Card>
	);
};

export default Testimonial;
