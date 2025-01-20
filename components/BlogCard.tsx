import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Blog } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const BlogCard = ({
	data,
	displayImage = true,
}: {
	data: Blog;
	displayImage: boolean;
}) => {
	const { slug, title, description, category, imageSrc, imageAlt } = data;
	return (
		<>
			<Link href={`/blogs/${slug.current}`} passHref>
				<Card className='flex flex-col aspect-auto items-start bg-background-400 border-border'>
					<CardHeader className='gap-4 w-full'>
						{imageSrc && displayImage && (
							<Image
								src={urlFor(imageSrc).width(357).url()}
								alt={imageAlt || "Blog Image"}
								width={357}
								height={207}
								className='w-full min-h-[207p] h-auto aspect-16/9'
							/>
						)}
						<CardTitle className='heading-6-bold'>{title}</CardTitle>
					</CardHeader>
					<CardContent className='w-full'>
						<p className='paragraph'>{description}</p>
					</CardContent>
					<CardFooter className='h-fit'>
						<Badge variant='secondary' className='text-black'>
							{category}
						</Badge>
					</CardFooter>
				</Card>
			</Link>
		</>
	);
};

export default BlogCard;
