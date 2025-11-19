import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Blog } from "@/sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";
import { AuthorInfo } from "@/app/(root)/blogs/[slug]/page";

const BlogCard = ({
  data,
  displayImage = true,
}: {
  data: Blog;
  displayImage: boolean;
}) => {
  const {
    slug,
    title,
    content,
    description,
    authors,
    category,
    imageSrc,
    imageAlt,
    createdAt,
    views,
  } = data;
  return (
    <>
      <SpotlightCard spotlightColor="rgba(198, 170, 255, 0.2)">
        <Card className="size-full rounded-lg">
          <Link href={`/blogs/${slug.current}`}>
            <CardHeader className="h-fit w-full">
              {imageSrc && displayImage && (
                <div className="relative">
                  <Image
                    src={urlFor(imageSrc).width(357).url()}
                    alt={imageAlt || "Blog Image"}
                    width={357}
                    height={207}
                    className="mb-4 aspect-[16/9] size-auto w-full rounded-t-lg"
                  />
                  {isNewBlog(createdAt) && (
                    <Badge
                      className="shadow-brand-light absolute left-2 top-2 bg-brand shadow-sm"
                      variant="default"
                    >
                      New
                    </Badge>
                  )}
                </div>
              )}
              <div className="flex size-fit">
                <span className="text-sm text-muted">{category}</span>
                <span className="text-sm text-muted">・</span>
                <span className="text-sm text-muted">{views} views</span>
              </div>
              <CardTitle className="heading-6-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="w-full">
              <p className="paragraph text-sm">{description}</p>
            </CardContent>
          </Link>
          <CardFooter className="flex h-fit flex-col items-start gap-2">
            <hr className="w-full border-border-soft" />
            <AuthorInfo
              aboutMeData={authors}
              content={content}
              size="sm"
              createdAt={createdAt}
            />
          </CardFooter>
        </Card>
      </SpotlightCard>
    </>
  );
};

const isNewBlog = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - createdDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  return daysDiff <= 7;
};
export default BlogCard;
