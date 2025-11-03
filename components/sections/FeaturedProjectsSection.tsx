import ProjectsSection from "@/components/sections/ProjectsSection";
import { FEATURED_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const FeaturedProjectsSection = async () => {
  const featuredProjects = await client.fetch(FEATURED_PROJECTS_QUERY);
  if (!featuredProjects || !(featuredProjects.length > 0))
    return <p className="paragraph text-red-300">No Projects Found.</p>;
  return (
    <>
      <ProjectsSection projects={featuredProjects} />
    </>
  );
};

export default FeaturedProjectsSection;
