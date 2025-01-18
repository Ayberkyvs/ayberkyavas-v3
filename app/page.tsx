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
import ContactCard from "@/components/ContactCard";
import BannerLine from "@/components/BannerLine";

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
	const testimonials = [
		{
			avatar: "/media/burakerarslan.webp",
			name: "Burak Erarslan",
			role: "Co-Founder at @Reform Marine",
			comment:
				"He has developed himself in web services and has a strong communication skills"
		},
		{
			avatar: "/media/doganisleyen.webp",
			name: "Dogan Isleyen",
			role: "General Manager at @Efor",
			comment:
				"He is a very ambitious and determined person, there is nothing he cannot do in the job he loves"
		},
		{
			avatar: "/media/ertugrulaksel.webp",
			name: "Ertugrul Aksel",
			role: "Founder at @Serapore",
			comment:
				"Thanks to Ayberk’s innovative policies, development-oriented efforts, and time-saving solutions, our company has gained a significant market position since its inception. I extend my gratitude to them"
		},
		{
			avatar: "/media/muratalbuz.webp",
			name: "Murat Albuz",
			role: "Plant Manager at @Newarc",
			comment:
				"Kudos to Ayberk for driving our frontend development with creativity and efficiency. Their solutions have made a real impact!"
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
						description='Dive into insightful stories, expert tips, and fresh perspectives. Explore topics that inspire, educate, and keep you ahead of the curve.'
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
						description='Discover how innovation meets impact. Explore our carefully crafted projects that solve real-world challenges and deliver measurable results.'
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
				<BannerLine/>
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
			<section className="layout-prefix flex-center flex-col gap-[100px] w-full mb-0">
				<ContactCard />
			</section>
		</>
	);
}
