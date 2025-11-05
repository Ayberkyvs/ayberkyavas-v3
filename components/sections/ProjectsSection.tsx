"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { Project } from "@/sanity/types";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!projects?.length)
    return <p className="paragraph text-red-300">No Projects Found.</p>;

  return (
    <ScrollStack
      useWindowScroll
      itemDistance={isMobile ? 250 : 100}
      itemStackDistance={30}
      stackPosition="20%"
    >
      {projects.map((project) => (
        <ScrollStackItem key={project._id}>
          <ProjectCard data={project} />
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
};

export default ProjectsSection;
