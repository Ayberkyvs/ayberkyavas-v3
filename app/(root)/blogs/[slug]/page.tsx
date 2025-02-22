import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ABOUT_ME_BASIC_QUERY, BLOG_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import markdownit from "markdown-it";
import { notFound } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

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

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slugParam = (await params)?.slug || "";
  const [blogData, aboutMeData] = await Promise.all([
    client.fetch(BLOG_QUERY, { slug: slugParam }),
    client.fetch(ABOUT_ME_BASIC_QUERY),
  ]);
  if (!blogData) notFound();
  const {
    title,
    description,
    category,
    imageSrc,
    imageAlt,
    createdAt,
    content,
  } = blogData;
  const { name, imageSrc: aboutMeImageSrc } = aboutMeData;
  const parsedContent = md.render(content || "");
  const clean = DOMPurify.sanitize(parsedContent, {
    ALLOWED_ATTR: ["style"],
  });
  return (
    <>
      <section className="layout-prefix flex-center mt-[60px] !max-w-screen-lg flex-col gap-5 md:mt-[80px]">
        <div className="flex flex-col items-center gap-2">
          <Link href="/about" className="flex-center flex gap-2">
            <Avatar>
              <AvatarImage
                src={urlFor(aboutMeImageSrc).width(60).height(60).url()}
                alt="Ayberk Yavas Image"
              />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
            <h6 className="paragraph text-white">{name}</h6>
          </Link>
          <div className="flex gap-2">
            <Link
              href={{
                pathname: "/blogs",
                query: { category },
              }}
            >
              <Badge variant="secondary" className="text-black">
                {category}
              </Badge>
            </Link>
            <Badge variant="outline" className="text-blue-50">
              {formatDate(createdAt)}
            </Badge>
          </div>
        </div>
        <div className="flex-center flex-col text-center">
          <h1 className="heading-1-bold">{title}</h1>
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
            className="prose:leading-3 prose mt-8 w-full !max-w-none break-all prose-headings:text-white prose-p:text-neutral-300 prose-a:text-blue-500 prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:text-sm prose-blockquote:italic prose-blockquote:text-neutral-400 prose-strong:font-bold prose-strong:text-white prose-code:text-blue-200 prose-pre:bg-gray-800 prose-ol:list-decimal prose-ol:pl-6 prose-ul:list-disc prose-ul:pl-6 prose-li:text-neutral-300 prose-hr:border-neutral-800 prose-hr:text-neutral-800"
            dangerouslySetInnerHTML={{ __html: clean }}
          />
        ) : (
          <p className="paragraph text-red-300">No details found.</p>
        )}
      </section>
    </>
  );
};

export default Page;
