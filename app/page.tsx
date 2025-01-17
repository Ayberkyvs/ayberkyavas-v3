import FadeIn from "@/components/animations/FadeIn";
import ScrollStack from "@/components/animations/ScrollStack";
import BlogCard from "@/components/BlogCard";
import FeaturedCard from "@/components/FeaturedCard";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import SectionHeading from "@/components/SectionHeading";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Cover } from "@/components/ui/cover";
import IconLogo from "../components/ui/logo-icon";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import Hero from "@/components/Hero";

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
	const slogans = [
		"GOOD QUALITY",
		"USER FRIENDLY",
		"FRONTEND SERVICE",
		"ACCESSIBLE",
		"INTERACTIVE",
		"RESPONSIVE",
		"MAINTAINABLE",
	];
	return (
		<>
			<section className=''>
				<Hero />
			</section>
			<div className='layout-padding flex flex-col gap-[150px] w-full max-w-screen-2xl mx-auto'>
				<section className='certifications'>
					<FadeIn delay={0.1} duration={0.8} direction='up'>
						<SectionHeading sub_heading='CERTIFICATED BY' />
					</FadeIn>
					<div className='w-full max-w-screen-2xl overflow-hidden'>
						<InfiniteCarousel>
							{brands &&
								brands.map((brand) => (
									<div
										key={brand.logo}
										className='embla__slide flex justify-center items-center gap-2 w-[200px] h-[75px] opacity-100'
									>
										<img
											src={brand.logo}
											alt={`${brand.name} logo svg`}
											className='aspect-square w-[50px] h-[50px]'
										/>
										<p className='heading-6-bold text-metallic-effect hidden lg:flex'>
											{brand.name}
										</p>
									</div>
								))}
						</InfiniteCarousel>
					</div>
				</section>
				<section className='flex-center flex-col gap-[100px] w-full mx-auto'>
					<FadeIn delay={0.1} duration={0.8} direction='up'>
						<SectionHeading
							sub_heading='LATEST BLOGS'
							heading='Checkout My Latest Blogs'
							description='Lorem ipsum dolor sit amet consectetur. Convallis sit nisl erat ac aliquam quisque.'
						/>
					</FadeIn>
					<FadeIn delay={0.2} duration={0.8} direction='left' distance={50} className="w-full">
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
					</FadeIn>
				</section>
				<section className='flex-center flex-col gap-[100px] w-full mx-auto'>
					<FadeIn delay={0.1} duration={0.8} direction='up'>
						<SectionHeading
							sub_heading='REAL-WORLD RESULTS'
							heading='Featured Projects'
							description='Lorem ipsum dolor sit amet consectetur. Convallis sit nisl erat ac aliquam quisque.'
						/>
					</FadeIn>
					<div className='flex w-full flex-col gap-[50px]'>
						{/* TODO: Fetch data w/sanity */}
						<ScrollStack offset={0} animationDelay={0.2}>
							<FeaturedCard />
							<FeaturedCard />
							<FeaturedCard />
						</ScrollStack>
					</div>
				</section>
				<section></section>
			</div>
			<section>
				<div className='flex-center w-screen h-[60px] md:h-[70px] bg-gradient-to-r from-[var(--brand)] to-[#7CA8D5] -rotate-6 -ml-2'>
					<InfiniteCarousel>
						{slogans.map((slogan) => (
							<div className='flex-[0_0_55%] xs:flex-[0_0_45%] sm:flex-[0_0_35%] md:flex-[0_0_25%] lg:flex-[0_0_20%] 2xl:flex-[0_0_15%] flex-center w-fit gap-3' key={uuidv4()}>
								<IconLogo className='w-[29px] h-[20px] lg:w-[39px] lg:h-[30px] text-black' />
								<h6 className='text-base xs:text-lg lg:heading-6-bold font-bold !text-black truncate'>{slogan}</h6>
							</div>
						))}
					</InfiniteCarousel>
				</div>
			</section>
		</>
	);
}
