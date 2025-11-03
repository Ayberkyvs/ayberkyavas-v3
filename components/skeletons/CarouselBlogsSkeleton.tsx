import BlogCardSkeleton from "./BlogCardSkeleton";

const CarouselBlogsSkeleton = () => {
  return (
    <div className="flex w-full gap-5 overflow-hidden">
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  );
};

export default CarouselBlogsSkeleton;
