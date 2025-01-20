import ProjectCard from "@/components/ProjectCard";
import ScrollStack from "@/components/animations/ScrollStack";
import { Project } from "@/sanity/types";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
	if (!projects || !(projects.length > 0))
		return <p className='paragraph text-red-300'>No Projects Found.</p>;
	return (
		<div className='flex w-full flex-col gap-[50px]'>
			<ScrollStack offset={0} animationDelay={0.2}>
				{projects?.map((project: Project) => (
					<ProjectCard key={project._id} data={project} />
				))}
			</ScrollStack>
		</div>
	);
};

export default ProjectsSection;
