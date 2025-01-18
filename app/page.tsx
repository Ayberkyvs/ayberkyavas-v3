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
import Image from "next/image";
import Hero from "@/components/Hero";
import Logo from "@/components/ui/logo";
import { ScrollingBanner } from "@/components/animations/ScrollingBanner";
import Testimonial from "@/components/Testimonial";

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
	const latestBlogs = [
		{
			title: "Arriving to a new milestone in my career",
			description:
				"Every career is a journey, filled with challenges, growth, and those significant moments that mark a shift in our path",
			category: "Selam",
		},
		{
			title: "Arriving to a new milestone in my career",
			description:
				"Every career is a journey, filled with challenges, growth, and those significant moments that mark a shift in our path",
			category: "Selam",
		},
		{
			title: "Arriving to a new milestone in my career",
			description:
				"Every career is a journey, filled with challenges, growth, and those significant moments that mark a shift in our path",
			category: "Selam",
		},
	];
	const featuredProjects = [
		{
			forWho: "Ayberk Yavas",
			createdAt: new Date(),
			title: "Full Stack X Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur. Rhoncus platea in scelerisque nulla. Tempus posuere tempor porttitor mi tellus quis diam mauris. Neque leo tincidunt ante quam sed sit. Viverra pellentesque diam est dui adipiscing.",
			callToActions: [
				{
					label: "Visit Website",
					link: "#",
				},
			],
			image: "/laptop.png",
		},
		{
			forWho: "Ayberk Yavas",
			createdAt: new Date(),
			title: "Full Stack X Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur. Rhoncus platea in scelerisque nulla. Tempus posuere tempor porttitor mi tellus quis diam mauris. Neque leo tincidunt ante quam sed sit. Viverra pellentesque diam est dui adipiscing.",
			callToActions: [
				{
					label: "Visit Website",
					link: "#",
				},
			],
			image: "/laptop.png",
		},
		{
			forWho: "Ayberk Yavas",
			createdAt: new Date(),
			title: "Full Stack X Clone",
			description:
				"Lorem ipsum dolor sit amet consectetur. Rhoncus platea in scelerisque nulla. Tempus posuere tempor porttitor mi tellus quis diam mauris. Neque leo tincidunt ante quam sed sit. Viverra pellentesque diam est dui adipiscing.",
			callToActions: [
				{
					label: "Visit Website",
					link: "#",
				},
			],
			image: "/laptop.png",
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
	const testimonials = [
		{
			avatar: "/avatar.png",
			name: "John Doe",
			role: "Web Developer at @HubX",
			comment:
				" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, doloremque, in iure explicabo id, aut modi excepturi vel quia optio perspiciatis. Itaque ullam eveniet quibusdam? Architecto nemo temporibus corrupti soluta."
		},
		{
			avatar: "/avatar.png",
			name: "John Doe",
			role: "Human Resources at @Meta",
			comment:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, doloremque, in iure explicabo id, aut modi excepturi vel quia optio perspiciatis. Itaque ullam eveniet quibusdam? Architecto nemo temporibus corrupti soluta."
		},
		{
			avatar: "/avatar.png",
			name: "John Doe",
			role: "CTO at @Scrimba",
			comment:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, doloremque, in iure explicabo id, aut modi excepturi vel quia optio perspiciatis. Itaque ullam eveniet quibusdam? Architecto nemo temporibus corrupti soluta."
		},
	]
	return (
		<>
			<section className='layout-prefix'>
				<Hero />
			</section>
			<section className='layout-prefix certifications'>
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
										className='aspect-square md:w-[50px] md:h-[50px]'
									/>
									<p className='heading-6-bold text-metallic-effect hidden lg:flex'>
										{brand.name}
									</p>
								</div>
							))}
					</InfiniteCarousel>
				</div>
			</section>
			<section className='layout-prefix flex-center flex-col gap-[100px] w-full'>
				<FadeIn delay={0.1} duration={0.8} direction='up'>
					<SectionHeading
						sub_heading='LATEST BLOGS'
						heading='Checkout My Latest Blogs'
						description='Lorem ipsum dolor sit amet consectetur. Convallis sit nisl erat ac aliquam quisque.'
					/>
				</FadeIn>
				<Carousel className='w-full'>
					<CarouselContent className='-ml-1 gap-[15px] h-fit'>
						{/* TODO Add dynamic data from sanity */}
						{latestBlogs.map((blog, index) => (
							<CarouselItem
								key={index}
								className='pl-1 sm:basis-1/2 xl:basis-1/3'
							>
								<FadeIn
									delay={0.2}
									duration={0.8}
									direction='left'
									distance={50}
									className='w-full'
								>
									<BlogCard data={blog} />
								</FadeIn>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
			<section className='layout-prefix flex-center flex-col gap-[100px] w-full'>
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
						{featuredProjects.map((project, index: number) => (
							<FeaturedCard key={index} data={project} />
						))}
					</ScrollStack>
				</div>
			</section>
			<section className='flex-center h-[50vh]'>
				<div className='flex-center w-screen h-[60px] md:h-[70px] bg-gradient-to-r from-blue-300 to-[var(--brand)] -rotate-3 -ml-2'>
					<ScrollingBanner speed={0.5}>
						{slogans.map((slogan, index: number) => (
							<div
								className='flex-[0_0_55%] xs:flex-[0_0_45%] sm:flex-[0_0_35%] md:flex-[0_0_25%] lg:flex-[0_0_20%] 2xl:flex-[0_0_15%] flex-center w-fit gap-3'
								key={index}
							>
								<Logo
									className='w-[29px] h-[20px] lg:w-[39px] lg:h-[30px] text-black'
									variant='icon'
								/>
								<h6 className='text-base xs:text-lg lg:heading-6-bold font-bold !text-black truncate'>
									{slogan}
								</h6>
							</div>
						))}
					</ScrollingBanner>
				</div>
			</section>
			<section className='layout-prefix flex-center flex-col gap-[100px] w-full'>
				<FadeIn delay={0.1} duration={0.8} direction='up'>
					<SectionHeading
						sub_heading='Happy Clients'
						heading='What Clients Say About Me'
						description="Don't just take my word for it. Here's what my clients have to say."
					/>
				</FadeIn>
				<Carousel className='w-full'>
					<CarouselContent className='-ml-1 gap-[15px] h-fit'>
						{testimonials.map((testimonial, index) => (
							<CarouselItem
								key={index}
								className='pl-1 sm:basis-1/2 xl:basis-1/3'
							>
								<FadeIn
									delay={0.2}
									duration={0.8}
									direction='left'
									distance={50}
									className='w-full'
								>
									<Testimonial data={testimonial} />
								</FadeIn>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
			<section className="layout-prefix flex-center flex-col gap-[100px] w-full">

			</section>
		</>
	);
}
