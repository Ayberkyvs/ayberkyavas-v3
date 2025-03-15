import FadeIn from "@/components/animations/FadeIn";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import SectionHeading from "@/components/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import ContactCard from "@/components/ContactCard";
import BannerLine from "@/components/BannerLine";
import type { Brand, Testimonial as TestimonialType } from "@/types/home";
import { client } from "@/sanity/lib/client";
import {
  FEATURED_PROJECTS_QUERY,
  LATEST_BLOGS_QUERY,
} from "@/sanity/lib/queries";
import CarouselLatestBlogsSection from "@/components/sections/CarouselLatestBlogsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Image from "next/image";

export const revalidate = 120;
export const metadata = {
  title: "Front-End Developer",
};

export default async function Home() {
  const brands: Array<Brand> = [
    {
      name: "Meta",
      image: "/brands/meta-logo.svg",
    },
    {
      name: "MongoDB",
      image: "/brands/mongodb-logo.svg",
    },
    {
      name: "Scrimba",
      image: "/brands/scrimba-logo.svg",
    },
    {
      name: "FreeCodeCamp",
      image: "/brands/freecodecamp-logo.svg",
    },
    {
      name: "Turkcell",
      image: "/brands/turkcell-logo.svg",
    },
  ];
  const testimonials: Array<TestimonialType> = [
    {
      avatar: "/media/ertugrulaksel.webp",
      name: "Ertugrul Aksel",
      role: "Founder at @Serapore",
      comment:
        "Thanks to Ayberk’s innovative policies, development-oriented efforts, and time-saving solutions, our company has gained a significant market position since its inception. I extend my gratitude to them",
      links: [
        {
          name: "Phone",
          link: "tel:+905324214816",
        },
        {
          name: "Email",
          link: "mailto:ertugrul@serapore.com.tr",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ertugrul-aksel-18445969/",
        },
      ],
    },
    {
      avatar: "/media/muratalbuz.webp",
      name: "Murat Albuz",
      role: "Plant Manager at @Newarc",
      comment:
        "Kudos to Ayberk for driving our frontend development with creativity and efficiency. Their solutions have made a real impact!",
      links: [
        {
          name: "Phone",
          link: "tel:+905056814460",
        },
        {
          name: "Email",
          link: "mailto:murat@serapore.com.tr",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/murat-albuz-20372b57/",
        },
      ],
    },
    {
      avatar: "/media/burakerarslan.webp",
      name: "Burak Erarslan",
      role: "Co-Founder at @Reform Marine",
      comment:
        "He has developed himself in web services and has a strong communication skills",
      links: [
        {
          name: "Phone",
          link: "tel:05373442566",
        },
        {
          name: "Email",
          link: "mailto:burak.erarslan@pinyin-marine.com",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/burak-erarslan/",
        },
      ],
    },
    {
      avatar: "/media/doganisleyen.webp",
      name: "Dogan Isleyen",
      role: "General Manager at @Efor",
      comment:
        "He is a very ambitious and determined person, there is nothing he cannot do in the job he loves",
      links: [
        {
          name: "Phone",
          link: "tel:+905336874545",
        },
      ],
    },
  ];
  const [featuredProjects, latestBlogs] = await Promise.all([
    client.fetch(FEATURED_PROJECTS_QUERY),
    client.fetch(LATEST_BLOGS_QUERY),
  ]);
  return (
    <>
      <section className="layout-prefix">
        <Hero />
      </section>
      <section className="layout-prefix certifications">
        {/* <FadeIn delay={0.1} duration={0.4} direction="up">
          <SectionHeading sub_heading="CERTIFICATED BY" />
        </FadeIn> */}
        <div className="w-full max-w-screen-2xl overflow-hidden">
          <InfiniteCarousel>
            {brands &&
              brands.map((brand, index) => (
                <div
                  key={index}
                  className="embla__slide flex h-[75px] w-[200px] items-center justify-center gap-2 opacity-100"
                >
                  <Image
                    src={brand.image}
                    alt={`${brand.name} logo svg`}
                    width={50}
                    height={50}
                    className="aspect-square md:size-[50px]"
                  />
                  <p className="heading-6-bold text-metallic-effect hidden lg:flex">
                    {brand.name}
                  </p>
                </div>
              ))}
          </InfiniteCarousel>
        </div>
      </section>
      <section className="layout-prefix flex-center w-full flex-col gap-[100px]">
        <FadeIn delay={0.1} duration={0.4} direction="up">
          <SectionHeading
            sub_heading="LATEST BLOGS"
            heading="Checkout My Latest Blogs"
            description="Dive into insightful stories, expert tips, and fresh perspectives. Explore topics that inspire, educate, and keep you ahead of the curve."
          />
        </FadeIn>
        <CarouselLatestBlogsSection latestBlogs={latestBlogs} />
      </section>
      <section className="layout-prefix flex-center w-full flex-col gap-[100px]">
        <FadeIn delay={0.1} duration={0.4} direction="up">
          <SectionHeading
            sub_heading="REAL-WORLD RESULTS"
            heading="Featured Projects"
            description="Discover how innovation meets impact. Explore our carefully crafted projects that solve real-world challenges and deliver measurable results."
          />
        </FadeIn>
        <ProjectsSection projects={featuredProjects} />
      </section>
      <section className="flex-center h-[50vh]">
        <BannerLine />
      </section>
      <section className="layout-prefix flex-center w-full flex-col gap-[100px]">
        <FadeIn delay={0.1} duration={0.4} direction="up">
          <SectionHeading
            sub_heading="Happy Clients"
            heading="What Clients Say About Me"
            description="Don't just take my word for it. Here's what my clients have to say."
          />
        </FadeIn>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 h-fit gap-[15px]">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-1/2 xl:basis-[30%]"
              >
                <FadeIn
                  delay={0.1 * index}
                  duration={0.4}
                  direction="left"
                  distance={30}
                  amount={0.1}
                  className="w-full"
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
      <section className="layout-prefix flex-center mb-0 w-full flex-col gap-[100px]">
        <ContactCard />
      </section>
    </>
  );
}
