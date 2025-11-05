import SectionHeading from "@/components/SectionHeading";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { FAQSection } from "@/components/pricing/faq";
import { Suspense } from "react";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeletons";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ContactCard from "@/components/ContactCard";
import { Metadata } from "next";
import Pricing from "@/components/pricing/Pricing";
import { PricingSkeleton } from "@/components/skeletons/PricingSkeleton";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Explore flexible pricing plans tailored to your needs. Whether you're a startup or an established business, find the perfect plan to kickstart your project with expert frontend development services.",
  authors: [{ name: "Ayberk Yavas" }],
  openGraph: {
    title: "Plans & Pricing",
    description:
      "Explore flexible pricing plans tailored to your needs. Whether you're a startup or an established business, find the perfect plan to kickstart your project with expert frontend development services.",
    url: "https://ayberkyavas.com/pricing",
  },
};
export const experimental_ppr = true;
const Page = () => {
  return (
    <>
      <div className="layout-prefix relative mt-[90px] h-fit w-full md:mt-[140px]">
        <section className="flex flex-col gap-24">
          <SectionHeading
            badge="Pricing"
            heading="Plans and Pricing"
            description="Choose the perfect plan for your project. All plans include my
            expertise in modern frontend development."
          />
          <Suspense fallback={<PricingSkeleton />}>
            <Pricing />
          </Suspense>
        </section>
        <section>
          <SectionHeading
            heading="Feature Comparison"
            description="Compare what's included in each plan to find the perfect fit for
            your project"
          />
          <Suspense fallback={<div>Loading Comparison Table...</div>}>
            <ComparisonTable />
          </Suspense>
        </section>
        <section>
          <SectionHeading
            heading="Frequently Asked Questions"
            description="Answers to common questions about my pricing plans and services"
          />
          <FAQSection />
        </section>
        <section className="flex-center w-full flex-col gap-[100px]">
          <SectionHeading
            heading="Featured Projects"
            description="Explore a selection of my standout projects that showcase my expertise in frontend development and commitment to delivering exceptional results."
          />
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
        <section>
          <ContactCard />
        </section>
      </div>
    </>
  );
};

export default Page;
