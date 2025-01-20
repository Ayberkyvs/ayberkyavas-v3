import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Blog } from "@/sanity/types";
import FadeIn from "../animations/FadeIn";
import BlogCard from "../BlogCard";

const CarouselLatestBlogsSection = ({latestBlogs}: {latestBlogs: Array<Blog>}) => {
	if (!latestBlogs || !(latestBlogs.length > 0)) return <p className="paragraph text-red-300">No Blogs Found.</p>;
	return (
		<Carousel className='w-full'>
			<CarouselContent className='-ml-1 gap-[15px] h-fit'>
				{latestBlogs.map((blog: Blog) => (
					<CarouselItem
						key={blog._id}
						className='pl-1 sm:basis-1/2 xl:basis-1/3'
					>
						<FadeIn
							delay={0.2}
							duration={0.8}
							direction='left'
							distance={50}
							className='w-full'
						>
							<BlogCard data={blog} displayImage />
						</FadeIn>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default CarouselLatestBlogsSection;
