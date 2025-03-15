import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Blog } from "@/sanity/types";
import BlogCard from "../BlogCard";
import FadeIn from "@/components/animations/FadeIn";

const CarouselLatestBlogsSection = ({
  latestBlogs,
}: {
  latestBlogs: Array<Blog>;
}) => {
  if (!latestBlogs || !(latestBlogs.length > 0))
    return <p className="paragraph text-red-300">No Blogs Found.</p>;
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 h-fit gap-[15px]">
        {latestBlogs.map((blog: Blog, index: number) => (
          <CarouselItem
            key={blog._id}
            className="basis-full pl-1 xs:basis-[70%] sm:basis-[56%] md:basis-[42%] lg:basis-[36%] xl:basis-[28%]"
          >
            <FadeIn
              delay={0.1 * index}
              duration={0.4}
              direction="left"
              distance={30}
              amount={0.1}
              className="w-full"
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
