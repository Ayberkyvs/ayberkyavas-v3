import BlogCard from "@/components/BlogCard";
import SearchForm from "@/components/SearchForm";
import SectionHeading from "@/components/SectionHeading";
import { client } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { Blog } from "@/sanity/types";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blogs",
	description:
		"Dive into insightful stories, expert tips, and fresh perspectives. Explore topics that inspire, educate, and keep you ahead of the curve.",
	authors: [{ name: "Ayberk Yavas" }],
	keywords: [
		"React Blog",
		"Next.js Blog",
		"JavaScript Blog",
		"blogs",
		"blogging",
		"articles",
		"insights",
	],
	openGraph: {
		title: "Blogs",
		description:
			"Dive into insightful stories, expert tips, and fresh perspectives. Explore topics that inspire, educate, and keep you ahead of the curve.",
		url: "https://ayberkyavas.com/blogs",
		type: "article",
		siteName: "Ayberk Yavas",
	},
};

const Page = async ({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) => {
	const query = (await searchParams)?.query || "";
	const params = { search: query.toLowerCase() || null };
	const blogs = await client.fetch(BLOGS_QUERY, params);
	return (
		<>
			<section className='layout-prefix flex-center flex-col mt-[60px] md:mt-[80px] gap-[50px]'>
				<div className='flex flex-col gap-5 max-w-screen-md w-full'>
					<SectionHeading
						sub_heading='ALL BLOGS'
						heading='Checkout My Blogs'
						description='Dive into insightful stories, expert tips, and fresh perspectives. Explore topics that inspire, educate, and keep you ahead of the curve.'
					/>
					<SearchForm query={query} />
				</div>
				<div className='flex flex-col w-full gap-8'>
					{query && (
						<p className='heading-5-bold'>Search results for "{query}"</p>
					)}
					{blogs.length > 0 ? (
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
							{blogs?.map((blog: Blog) => (
								<BlogCard key={blog._id} data={blog} displayImage />
							))}
						</div>
					) : (
						<p className='paragraph text-red-300'>No Blogs Found.</p>
					)}
				</div>
			</section>
		</>
	);
};

export default Page;
