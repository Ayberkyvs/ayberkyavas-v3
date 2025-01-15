import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Cover } from "@/components/ui/cover";
import clsx from "clsx";

export default function Home() {
	const brands = [
		{
			name: "Meta",
			logo: "/brands/meta-logo.svg",
		},
		{
			name: "MongoDB",
			logo: "/brands/mongodb-logo.svg",
		},
		{
			name: "Scrimba",
			logo: "/brands/scrimba-logo.svg",
		},
		{
			name: "FreeCodeCamp",
			logo: "/brands/freecodecamp-logo.svg",
		},
		{
			name: "Turkcell",
			logo: "/brands/turkcell-logo.svg",
		},
	];
	return (
		<>
			<section className='hero'>
				<h1 className='text-4xl xs:text-5xl md:text-6xl xl:text-7xl font-semibold max-w-screen-2xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/70 to-white/70'>
					Building amazing websites <br /> at <Cover>warp speed</Cover>
				</h1>
			</section>
			<section className='certifications'>
				<h6 className='sub-heading'>CERTIFICATED BY</h6>
				<div className='layout-padding flex justify-between max-w-screen-2xl w-full mx-auto overflow-hidden'>
					{brands &&
						brands.map((brand) => (
							<div
								key={brand.logo}
								className='flex justify-center items-center gap-2'
							>
								<img
									src={brand.logo}
									alt={`${brand.name} logo svg`}
                  className='aspect-square w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]'
								/>
								<p className='heading-6 hidden xl:flex'>{brand.name}</p>
							</div>
						))}
				</div>
			</section>
			<section className='flex-center flex-col gap-[100px] layout-padding max-w-screen-2xl mx-auto'>
				<SectionHeading
					sub_heading='LATEST BLOGS'
					heading='Checkout My Latest Blogs'
					description='Lorem ipsum dolor sit amet consectetur. Convallis sit nisl erat ac aliquam quisque.'
				/>
				<Carousel className='w-full'>
					<CarouselContent className='-ml-1 gap-[15px] h-fit'>
            {/* TODO Add dynamic data from sanity */}
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem
								key={index}
								className='pl-1 sm:basis-1/2 xl:basis-1/3'
							>
								<BlogCard />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
		</>
	);
}
