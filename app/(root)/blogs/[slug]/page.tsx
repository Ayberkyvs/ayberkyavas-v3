import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ABOUT_ME_BASIC_QUERY, BLOG_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import markdownit from "markdown-it";
import { notFound } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params)?.slug;
	const blogData = await client.fetch(BLOG_QUERY, { slug: slug });
	if (!blogData) {
		return {
			title: "Blog Not Found",
			description: "The blog you are looking for does not exist.",
		};
	}

	const { title, description, imageSrc } = blogData;

	return {
		title,
		description,
		authors: [{ name: "Ayberk Yavas" }],
		openGraph: {
			title,
			description,
			type: "article",
			images: imageSrc
				? [{ url: urlFor(imageSrc).width(1200).height(630).url() }]
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: imageSrc
				? [urlFor(imageSrc).width(1200).height(630).url()]
				: undefined,
		},
	};
}

const md = markdownit();
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slugParam = (await params)?.slug || "";
	const [blogData, aboutMeData] = await Promise.all([
		client.fetch(BLOG_QUERY, { slug: slugParam }),
		client.fetch(ABOUT_ME_BASIC_QUERY),
	]);
	if (!blogData) notFound();
	const {
		title,
		description,
		category,
		imageSrc,
		imageAlt,
		createdAt,
		content,
	} = blogData;
	const { name, imageSrc: aboutMeImageSrc } = aboutMeData;
	const parsedContent = md.render(content || "");
	return (
		<>
			<section className='layout-prefix max-w-screen-lg flex-center flex-col gap-5 mt-[60px] md:mt-[80px]'>
				<div className='flex flex-col gap-2 items-start'>
					<div className='flex flex-center gap-2'>
						<Avatar>
							<AvatarImage
								src={urlFor(aboutMeImageSrc).width(60).height(60).url()}
								alt='Ayberk Yavas Image'
							/>
							<AvatarFallback>AY</AvatarFallback>
						</Avatar>
						<h6 className='paragraph text-white'>{name}</h6>
					</div>
					<div className='flex gap-2'>
						<Badge variant='secondary' className='text-black'>
							{category}
						</Badge>
						<Badge variant='outline' className='text-blue-50'>
							{formatDate(createdAt)}
						</Badge>
					</div>
				</div>
				<div className='flex-center flex-col'>
					<h1 className='heading-1-bold'>{title}</h1>
					<p className='paragraph text-center'>{description}</p>
				</div>
				{imageSrc && (
					<Image
						src={urlFor(imageSrc).width(1440).url()}
						width={1024}
						height={576}
						alt={imageAlt || "Blog Thumbnail Image"}
						className='w-full h-auto aspect-16/9 mt-8'
					/>
				)}

				{parsedContent ? (
					<article
						className='prose break-all text-white'
						dangerouslySetInnerHTML={{ __html: parsedContent }}
					/>
				) : (
					<p className='paragraph text-red-300'>No details found.</p>
				)}
			</section>
		</>
	);
};

export default Page;
