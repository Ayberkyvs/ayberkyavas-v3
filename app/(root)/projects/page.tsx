import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { Metadata } from "next";

export const revalidate = 120;
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover how innovation meets impact. Explore our carefully crafted projects that solve real-world challenges and deliver measurable results.",
  authors: [{ name: "Ayberk Yavas" }],
  openGraph: {
    title: "Projects",
    description:
      "Discover how innovation meets impact. Explore our carefully crafted projects that solve real-world challenges and deliver measurable results.",
    url: "https://ayberkyavas.com/projects",
  },
};
const Page = async () => {
  const allPosts = await client.fetch(PROJECTS_QUERY);
  return (
    <>
      <section className="layout-prefix flex-center mt-[90px] flex-col gap-[100px] md:mt-[140px]">
        <FadeIn delay={0.1} duration={0.8} direction="up">
          <SectionHeading
            badge="Projects"
            heading="Checkout My Projects"
            description="Discover how innovation meets impact. Explore our carefully crafted projects that solve real-world challenges and deliver measurable results."
          />
        </FadeIn>
        <ProjectsSection projects={allPosts} />
      </section>
    </>
  );
};
export default Page;
