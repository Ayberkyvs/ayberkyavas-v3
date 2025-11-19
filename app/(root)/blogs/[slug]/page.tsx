import { Badge } from "@/components/ui/badge";
import { cn, formatDate, getReadingTime } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BLOG_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import markdownit from "markdown-it";
import { notFound } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import BlogViewsClient from "@/components/BlogViewsClient";
import { Blog } from "@/sanity/types";
import type { AuthorInfoType } from "@/types/home";
import FadeIn from "@/components/animations/FadeIn";
import CarouselLatestBlogsSection from "@/components/sections/CarouselLatestBlogsSection";
import { Suspense } from "react";
import CarouselBlogsSkeleton from "@/components/skeletons/CarouselBlogsSkeleton";
import { CommentsWrapper } from "@/components/comment/comment-wrapper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params)?.slug;
  const blogData = await client.fetch(BLOG_QUERY, { slug: slug });
  if (!blogData) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  const { title, description, imageSrc } = blogData;

  return {
    title,
    description,
    authors: [{ name: "Ayberk Yavas" }],
    openGraph: {
      title,
      description,
      type: "article",
      images: imageSrc
        ? [{ url: urlFor(imageSrc).width(1200).height(630).url() }]
        : undefined,
      url: `https://ayberkyavas.com/blogs/${slug}`,
      site_name: "Ayberk Yavas",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageSrc
        ? [urlFor(imageSrc).width(1200).height(630).url()]
        : undefined,
    },
  };
}

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

export const experimental_ppr = true;

const window = new JSDOM("").window;
const purify = DOMPurify(window);

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slugParam = (await params)?.slug || "";
  const blogData = await client.fetch(BLOG_QUERY, { slug: slugParam });
  if (!blogData) notFound();
  const {
    _id,
    title,
    description,
    category,
    imageSrc,
    authors,
    imageAlt,
    createdAt,
    content,
    views,
  } = blogData as Blog;
  const parsedContent = md.render(content || "");
  const clean = purify.sanitize(parsedContent, {
    ALLOWED_ATTR: ["style"],
  });

  const viewCount = views || 0;

  return (
    <>
      <section className="layout-prefix flex-center mt-[90px] !max-w-screen-lg flex-col gap-5 md:mt-[140px]">
        <div className="flex flex-col items-center gap-2">
          <AuthorInfo
            aboutMeData={authors}
            size="md"
            content={content}
            createdAt={createdAt}
          />
          <div className="flex gap-2">
            <Link
              href={{
                pathname: "/blogs",
                query: { category },
              }}
            >
              <Badge variant="secondary" className="text-sm text-black">
                {category}
              </Badge>
            </Link>
            <BlogViewsClient _id={_id} initialViews={viewCount} />
          </div>
        </div>
        <div className="flex-center mt-4 flex-col gap-2 text-center">
          <FadeIn distance={20} duration={0.3} direction="up">
            <h1 className="heading-2-bold md:heading-1-bold">{title}</h1>
          </FadeIn>
          <p className="paragraph">{description}</p>
        </div>
        {imageSrc && (
          <Image
            src={urlFor(imageSrc).width(1440).url()}
            width={1024}
            height={576}
            alt={imageAlt || "Blog Thumbnail Image"}
            className="mt-8 aspect-[16/9] h-auto w-full"
          />
        )}

        {parsedContent ? (
          <article
            className={cn(
              "prose:leading-3 prose mt-8 w-full !max-w-none break-all transition-colors duration-200 prose-strong:font-bold prose-ol:list-decimal prose-ol:pl-6 prose-ul:list-disc prose-ul:pl-6",
              "prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-blue-600 prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-blue-300 prose-blockquote:text-sm prose-blockquote:italic prose-blockquote:text-neutral-500 prose-strong:text-neutral-900 prose-code:text-blue-700 prose-pre:bg-gray-100 prose-li:text-neutral-700 prose-hr:border-neutral-200 prose-hr:text-neutral-200",
              "dark:prose-headings:text-white dark:prose-p:text-paragraph dark:prose-a:text-blue-500 dark:prose-a:underline dark:prose-blockquote:border-l-4 dark:prose-blockquote:border-blue-500 dark:prose-blockquote:text-sm dark:prose-blockquote:italic dark:prose-blockquote:text-neutral-400 dark:prose-strong:text-white dark:prose-code:text-blue-200 dark:prose-pre:bg-gray-800 dark:prose-li:text-neutral-300 dark:prose-hr:border-neutral-800 dark:prose-hr:text-neutral-800",
            )}
            dangerouslySetInnerHTML={{ __html: clean }}
          />
        ) : (
          <p className="paragraph text-red-300">No details found.</p>
        )}
      </section>
      <section className="layout-prefix w-full !max-w-screen-lg">
        <CommentsWrapper
          postId={_id}
          postAuthorId={authors._id}
          postTitle={title}
        />
      </section>
      <section className="layout-prefix w-full !max-w-screen-lg">
        <h3 className="heading-5-bold mb-12">Other Blog Posts</h3>
        <Suspense fallback={<CarouselBlogsSkeleton />}>
          <CarouselLatestBlogsSection cardClassName="xl:basis-[38%]" />
        </Suspense>
      </section>
    </>
  );
};

export const AuthorInfo = ({
  aboutMeData,
  createdAt,
  content,
  size = "md",
}: AuthorInfoType) => {
  return (
    <>
      <div
        className={cn("flex-center flex w-fit gap-2", {
          "h-[50px] p-1": size === "sm",
          "h-[80px] p-2": size === "md",
          "h-[120px] p-3": size === "lg",
        })}
      >
        <Avatar className="h-full w-auto border border-border-soft">
          {aboutMeData.image && (
            <AvatarImage
              src={aboutMeData.image || ""}
              alt="Ayberk Yavas Image"
            />
          )}
          <AvatarFallback>AY</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h6
            className={cn("font-medium text-foreground", {
              "text-sm": size === "sm",
              "text-md": size === "md",
              "text-lg": size === "lg",
            })}
          >
            {aboutMeData.name}
          </h6>
          <div className="flex">
            <span className="text-xs text-brand dark:text-purple-50">
              {formatDate(createdAt)}
            </span>
            <span className="text-xs text-brand dark:text-purple-50">・</span>
            <span className="text-xs text-brand dark:text-purple-50">
              {getReadingTime(content)} min read
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
