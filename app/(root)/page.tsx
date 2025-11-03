import FadeIn from "@/components/animations/FadeIn";
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
import CarouselLatestBlogsSection from "@/components/sections/CarouselLatestBlogsSection";
import { testimonials } from "@/lib/consts";
import { Suspense } from "react";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ProjectCardSkeleton from "../../components/skeletons/ProjectCardSkeletons";
import CarouselBlogsSkeleton from "@/components/skeletons/CarouselBlogsSkeleton";

export const experimental_ppr = true;

export const metadata = {
  title: "Front-End Developer",
};

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="layout-prefix flex-center w-full flex-col gap-[100px]">
        <FadeIn delay={0.1} duration={0.4} direction="up">
          <SectionHeading
            sub_heading="Latest Insights"
            heading="Checkout My Latest Blogs"
            description="Dive into insightful stories, expert tips, and fresh perspectives. Explore topics that inspire, educate, and keep you ahead of the curve."
          />
        </FadeIn>
        <Suspense fallback={<CarouselBlogsSkeleton />}>
          <CarouselLatestBlogsSection />
        </Suspense>
      </section>
      <section className="layout-prefix flex-center w-full flex-col gap-[100px]">
        <FadeIn delay={0.1} duration={0.4} direction="up">
          <SectionHeading
            sub_heading="Real-World Solutions"
            heading="Featured Projects"
            description="Discover how innovation meets impact. Explore our carefully crafted projects that solve real-world challenges and deliver measurable results."
          />
        </FadeIn>
        <Suspense
          fallback={
            <div className="flex h-fit w-full flex-col gap-5">
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </div>
          }
        >
          <FeaturedProjectsSection />
        </Suspense>
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
